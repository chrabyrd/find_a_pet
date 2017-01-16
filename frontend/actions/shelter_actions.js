import * as APIUtil from '../util/api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_SHELTER = 'RECEIVE_SHELTER';
export const RECEIVE_NEW_SHELTER = 'RECEIVE_NEW_SHELTER';
export const RECEIVE_SHELTERS = 'RECEIVE_SHELTERS';
export const REMOVE_SHELTER = 'REMOVE_SHELTER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveShelters = shelters => ({
  type: RECEIVE_SHELTERS,
  shelters
});

const receiveShelter = shelter => ({
  type: RECEIVE_SHELTER,
  shelter
});

const receiveNewShelter = shelter => ({
  type: RECEIVE_NEW_SHELTER,
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

export const fetchShelters = () => dispatch => (
  APIUtil.fetchShelters()
    .then(shelters => dispatch(receiveShelters(shelters)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

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

export const deleteShelter = id => dispatch => (
  APIUtil.deleteShelter(id)
    .then(shelter => dispatch(removeShelter(shelter)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
