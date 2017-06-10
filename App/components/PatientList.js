import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions'

import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import Patient from './Patient';
import styles from '../assets/styles';


class PatientList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState(this.props);
    this.setState({ fetching: true });
    setTimeout(() => {this.setState({ fetching: false })}, 10);

    this.props.fetchPatients().then(() => {
      this.setState({ searching: false });
    });
  }

  render() {

    const patients =  this.state.patients.map((patient, i) => (<Patient {...patient} key={i}/>));

    const patientList = (
      <ScrollView style={styles.wrapper}>
        {patients}

        <TouchableOpacity activeOpacity={.5}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Calculate optimal route</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );

    if (this.state.fetching) {
      return (<ActivityIndicator
        style={{ position: "absolute", top: 330, marginHorizontal: 170 }}
        size="large"
        color="black"
      />);
    } else {
      return <View>{patientList}</View>;
    }
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  // console.log('mapStateToProps', state);
  return {
    patients: state.patients
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);

