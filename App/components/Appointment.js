import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from '../assets/styles';

export default class AppointmentList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    const {
      id,
      firstName,
      lastName
    } = this.props.patient;

    const {
      startTime,
      endTime,
      travelTime
    } = this.props.appointment;

    const backgroundColor = 'rgba(214, 221, 214, .5)';

    return (
      <View style={[styles.listItemWrap, { backgroundColor: backgroundColor }]}>
        <View style={styles.icon}>
          <Text style={[styles.text, styles.textHead]}>{firstName} {lastName}</Text>
        </View>

        <Text style={styles.text}>Start time: {startTime}</Text>
        <Text style={styles.text}>End time: {endTime}</Text>
        <Text style={styles.text}>Traveling time: {Math.round(travelTime / 60)} minutes</Text>
      </View>
    )
  }

}
