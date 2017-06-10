import { combineReducers } from 'redux';
import * as patientReducer from './patients'
// import * as navigationReducer from './navigation'

export default combineReducers(Object.assign(
  patientReducer,
  // navigationReducer,
));
