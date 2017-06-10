import _ from 'lodash';
import React, { Component } from 'react';

import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Patient from './Patient';
import styles from '../assets/styles';
import Api from '../lib/api';


export default class PatientList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({ fetching: true });

    Api.getPatients()
      .then((patients) => {
        console.log('patients', patients);
        this.setState({patients, fetching: false });
      })
      .catch((err) => {
        console.error(err);
        this.setState({ fetching: false });
      });
  }

  render() {
    console.log(this.state);

    const patients = _.get(this, 'state.patients', []);

    const patientsList = patients.map((patient, i) => (<Patient {...patient} key={i}/>));

    const patientList = (
      <View>
        <ScrollView style={styles.wrapper}>
          {patientsList}

          <TouchableOpacity activeOpacity={.5}>
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
