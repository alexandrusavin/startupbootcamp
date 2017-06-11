import _ from 'lodash';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Appointment from './Appointment';

import styles from '../assets/styles';


export default class AppointmentList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {startTime, endTime, appointments, patients} = _.get(this.props, 'navigation.state.params');
    const getPatient = _.partial(_.find, patients);

    const appointmentList = appointments.map((appointment) => (
      <Appointment
        key={ appointment.patientId }
        appointment={ appointment }
        patient={getPatient({ id: appointment.patientId })}/>
    ));

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.5} onPress={this.props.navigation.goBack.bind(this, null)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>&lt; Back</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.listItemWrap, {backgroundColor: '#CED1C6'}]}>Leaving home: {startTime}</Text>

        <ScrollView style={styles.wrapper}>
          {appointmentList}
        </ScrollView>

        <Text style={[styles.listItemWrap, {backgroundColor: '#CED1C6'}]}>Getting home: {endTime}</Text>
      </View>
    )
  }
}
