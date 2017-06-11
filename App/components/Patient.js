import _ from 'lodash';
import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Picker from 'react-native-picker';

import styles from '../assets/styles';

const minutes = [];
for (let i = 0; i < 60; i += 15) {
  minutes.push(i);
}

const hours = [];
for (let i = 0; i < 24; i += 1) {
  hours.push(i);
}


export default class Patient extends Component {
  constructor(props) {
    super(props);

    props.patient.time = [0, 0];

    this.state = { patient: props.patient };
  }

  componentWillUpdate(nextProps, nextState) {

  }

  showPicker(id) {
    return () => {
      Picker.init({
        pickerData: [hours, minutes],
        selectedValue: this.state.patient.time,
        onPickerConfirm: time => {
          this.setState({
            patient: _.extend(this.state.patient, {time})
          });
        }
      });

      Picker.show();
    }
  }

  render() {
    const {
      id,
      firstName,
      lastName,
      country,
      city,
      postCode,
      street,
      houseNr,
      suffix
    } = this.state.patient;

    const backgroundColor = this.state.patient.time[0] + this.state.patient.time[1] === 0 ? 'rgba(255, 255, 255, .5)' : 'rgba(170, 186, 10, .5)';

    return (
      <TouchableOpacity style={[styles.listItemWrap, { backgroundColor: backgroundColor }]}
                        onPress={this.showPicker(id)}>
        <View style={styles.icon}>

          <Text style={[styles.text, styles.textHead]}>{firstName} {lastName}</Text>
        </View>

        <Text style={styles.text}>{street} {houseNr}{suffix}</Text>
        <Text style={styles.text}>{postCode} {city}, {country}</Text>
      </TouchableOpacity>
    )
  }
}
