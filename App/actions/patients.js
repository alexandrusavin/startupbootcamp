import * as types from './types'
import Api from '../lib/api'

export function fetchPatients() {
  return (dispatch, getState) => {
    return Api
      .getPatients()
      .then(patients => {
        dispatch(setFetchedPatients({ patients }));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export function setFetchedPatients({ patients }) {
  return {
    type: types.SET_FETCHED_PATIENTS,
    patients,
  }
}
