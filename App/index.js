import React, { Component } from 'react';
import {
  Image
} from 'react-native';

import PatientList from './components/PatientList';
import styles from './assets/styles';
const background = require("./assets/background.jpg");


export default class App extends Component {
  render() {
    return (
      <Image
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover"
        resizeMethod="resize"
        blurRadius={10}
      >
        <PatientList/>
      </Image>
    )
  }
}
