import * as APIUtil from '../util/api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_SHELTER = 'RECEIVE_SHELTER';
export const REMOVE_SHELTER = 'REMOVE_SHELTER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveShelter = shelter => ({
  type: RECEIVE_SHELTER,
  shelter
});

const removeShelter = shelter => ({
  type: REMOVE_SHELTER,
  shelter
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchShelter = id => dispatch => (
  APIUtil.fetchShelter(id)
    .then(newShelter => dispatch(receiveShelter(newShelter)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createShelter = shelter => dispatch => (
  APIUtil.createShelter(shelter)
    .then(newShelter => dispatch(receiveShelter(newShelter)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateShelter = shelter => dispatch => (
  APIUtil.updateShelter(shelter)
    .then(newShelter => dispatch(receiveShelter(newShelter)))
    .then(hashHistory.push('/'))
);

export const deleteShelter = shelter => dispatch => (
  APIUtil.deleteShelter(shelter)
    .then(newShelter => dispatch(removeShelter(newShelter)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
