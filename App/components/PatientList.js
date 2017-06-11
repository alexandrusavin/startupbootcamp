import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';

import Patient from './Patient';
import styles from '../assets/styles';
import Api from '../lib/api';


export default class PatientList extends Component {
  constructor(props) {
    super(props);

    this.state = {fetching: false};
  }

  componentWillMount() {
    this.setState({
      fetching: true,
      patients: []
    });

    Api.getPatients()
      .then((patients) => {
        this.setState({patients, fetching: false });
      })
      .catch((err) => {
        this.setState({ fetching: false });
      });
  }

  _submit() {
    console.log('state', this.state);
  }

  render() {
    const patients = _.get(this, 'state.patients', []);

    const patientsList = patients.map((patient, i) => (<Patient patient={patient} key={i}/>));

    const patientList = (
      <View>
        <View style={styles.datePickerWrap}>
          <DatePicker
            style={styles.datePicker}
            date={this.state.date}
            mode="datetime"
            placeholder="Press here to select leaving home time"
            format="YYYY-MM-DD"
            minDate={moment().format('YYYY-MM-DD')}
            maxDate={moment().add(7, 'days').format('YYYY-MM-DD')}
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
            onDateChange={(date) => {this.setState({date: date})}}
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
      </View>
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
