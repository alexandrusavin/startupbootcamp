import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const patients = createReducer({}, {
  [types.SET_FETCHED_PATIENTS](state, action) {
    let newState = {};

    action.patients.forEach( (patient) => {
      newState.patients[patient.id] = Object.assign({}, patient, { id });
    });
    return newState;
  },

});
