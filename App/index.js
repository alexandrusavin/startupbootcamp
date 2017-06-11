import React, { Component } from 'react';
import {
  Image,
  NavigatorIOS,
  Platform
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import PatientList from './components/PatientList';
import AppointmentList from './components/AppointmentList';
import styles from './assets/styles';
const background = require("./assets/background.jpg");

const Routes = {
  PatientList: {
    name: 'Patients list',
    description: 'List of patients',
    screen: PatientList
  },
  Appointments: {
    name: 'Appointment list',
    description: 'List of Appointments',
    screen: AppointmentList
  }
};

const AppNavigator = StackNavigator(
  {
    ...Routes,
    Index: {
      screen: PatientList,
    },
  },
  {
    initialRouteName: 'Index',
    headerMode: 'none',

    /*
     * Use modal on iOS because the card mode comes from the right,
     * which conflicts with the drawer example gesture
     */
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


class App extends Component {
  render() {
    return (
      <Image
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover"
        resizeMethod="resize"
        blurRadius={10}
      >
        <NavigatorIOS
          initialRoute={{
            component: PatientList,
            title: 'My Initial Scene',
          }}
        />
      </Image>
    )
  }
}

export default AppNavigator;
