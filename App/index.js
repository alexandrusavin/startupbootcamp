import React, { Component } from 'react';
import {
  Provider
} from 'react-redux';
import {
  Image
} from 'react-native';

import configureStore from './createStore';
import PatientList from './components/PatientList';
import initialStore from './store.json';
import styles from './assets/styles';
const background = require("./assets/background.jpg");

const store = configureStore(initialStore);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Image
          style={[styles.background, styles.container]}
          source={background}
          resizeMode="cover"
          resizeMethod="resize"
          blurRadius={10}
        >
          <PatientList/>
        </Image>
      </Provider>
    )
  }
}
