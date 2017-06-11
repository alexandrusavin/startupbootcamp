import _ from 'lodash';
import React, { Component } from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import Appointment from './Appointment';

import styles from '../assets/styles';


export default class AppointmentList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const appointments = _.get(this.props, 'navigation.state.params.appointments');
    const patients = _.get(this.props, 'navigation.state.params.patients');
    const getPatient = _.partial(_.find, patients);

    const appointmentList = appointments.map((appointment) => (
      <Appointment
        key={ appointment.patientId }
        appointment={ appointment }
        patient={getPatient({ id: appointment.patientId })}/>
    ));

    return (
      <View>
        <ScrollView style={styles.wrapper}>
          {appointmentList}
        </ScrollView>
      </View>
    )
  }
}
