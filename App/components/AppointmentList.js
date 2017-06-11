import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Timeline from 'react-native-timeline-listview'

import styles from '../assets/styles';


export default class AppointmentList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { startTime, endTime, appointments, patients } = _.get(this.props, 'navigation.state.params');
    const getPatient = _.partial(_.find, patients);

    const appointmentList = appointments.map((appointment) => ({
      time: moment(appointment.startTime).format('hh:mm'),
      title: getPatient({ id: appointment.patientId }).firstName
    }));

    appointmentList.unshift({
      time: moment(startTime).format('hh:mm'),
      title: 'Leave home'
    });

    appointmentList.push({
      time: moment(endTime).format('hh:mm'),
      title: 'Get home'
    });

    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.5}
                          onPress={this.props.navigation.goBack.bind(this, null)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>&lt; Back</Text>
          </View>
        </TouchableOpacity>

        <Text style={[styles.listItemWrap, { backgroundColor: '#CED1C6' }]}>Leaving
          home: {startTime}</Text>

        <Timeline
          data={appointmentList}
        />

        <Text style={[styles.listItemWrap, { backgroundColor: '#CED1C6' }]}>Getting
          home: {endTime}</Text>
      </View>
    )
  }
}
