import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';


import styles from '../assets/styles';

export default class Patient extends Component {
  constructor(props) {
    super(props);
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
    } = this.props;

    return (
      <View style={styles.listItemWrap}>
        <Text style={[styles.text, styles.textHead]}>{firstName} {lastName}</Text>
        <Text style={styles.text}>{street} {houseNr}{suffix}</Text>
        <Text style={styles.text}>{postCode} {city}, {country}</Text>

        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Consultation time in minutes"
            style={styles.input}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    )
  }
}
