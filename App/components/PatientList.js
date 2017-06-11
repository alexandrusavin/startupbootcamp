import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  Alert,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

import Patient from './Patient';
import styles from '../assets/styles';
import Api from '../lib/api';

const timeToSec = (time) => (time[0] * 60 + time[1]) * 60;
const travelModes = {
  TRANSIT: 'TRANSIT',
  DRIVING: 'DRIVING'
};
const background = require("../assets/background.jpg");


export default class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = { fetching: false };
  }

  componentWillMount() {
    this.setState({
      fetching: true,
      patients: []
    });

    Api.getPatients()
      .then((patients) => {
        this.setState({ patients, fetching: false });
      })
      .catch((err) => {
        this.setState({ fetching: false });
      });
  }

  _submit() {
    const requests = this.state.patients
      .map(_.partialRight(_.pick, ['id', 'time']))
      .filter((patient) => patient.time[0] + patient.time[1] > 0)
      .map((patient) => _.extend(patient, { duration: timeToSec(patient.time) }));

    if (!this.state.date) {
      return Alert.alert(
        'Select leaving time',
        'Please select the leaving time in order to calculate the best route'
      )
    }

    if (_.isEmpty(requests)) {
      return Alert.alert(
        'Select patients',
        'Please select at least one patient to schedule an appointment'
      )
    }

    const requestPayload = {
      startTime: this.state.date,
      travelMode: travelModes.DRIVING,
      requests,
    };

    this.setState({ fetching: true });

    Api.getRouteForAppointments(requestPayload)
      .then((result) => {
        console.log(result);
        this.setState({ fetching: false });
        this.props.navigation.navigate('Appointments', _.extend(result, {
          patients: this.state.patients
        }));
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const patients = _.get(this, 'state.patients', []);

    const patientsList = patients.map((patient, i) => (<Patient patient={patient} key={i}/>));

    const patientList = (

      <Image
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover"
        resizeMethod="resize"
        blurRadius={10}
      >
        <View style={styles.datePickerWrap}>
          <DatePicker
            style={styles.datePicker}
            date={this.state.date}
            mode="datetime"
            placeholder="Press here to select leaving home time"
            format="YYYY-MM-DDTHH:mm:ss"
            minDate={moment().format()}
            maxDate={moment().add(7, 'days').format()}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 20,
                top: 4,
                marginLeft: 0
              },
              dateInput: {
                marginLeft: 36,
                borderWidth: 0
              },
              placeholderText: {
                color: '#000',
                borderWidth: 0
              }
            }}
            onDateChange={(date) => {
              this.setState({ date: date })
            }}
          />
        </View>

        <ScrollView style={styles.wrapper}>
          {patientsList}

          <TouchableOpacity activeOpacity={.5} onPress={this._submit.bind(this)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Calculate optimal route</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </Image>
    );

    if (this.state.fetching) {
      return (<ActivityIndicator
        style={{ position: "absolute", top: 330, marginHorizontal: 170 }}
        size="large"
        color="black"
      />);
    } else {
      return <View>{patientList}</View>;
    }
  }
}
