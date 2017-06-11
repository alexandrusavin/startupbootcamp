import React, { Component } from 'react';
import {
  Platform
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import PatientList from './components/PatientList';
import AppointmentList from './components/AppointmentList';

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

const navigationConfig = {
  initialRouteName: 'Index',
  headerMode: 'none',

  /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
  navigationOptions: {
    title: 'App Name',
    headerTintColor: 'black',
  }
};

const AppNavigator = StackNavigator(
  {
    ...Routes,

    Index: {
      screen: PatientList,
    },
  }, navigationConfig);

export default AppNavigator;
