import * as APIUtil from '../util/api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_PET = 'RECEIVE_PET';
export const RECEIVE_NEW_PET = 'RECEIVE_PET';
export const RECEIVE_PETS = 'RECEIVE_PETS';
export const REMOVE_PET = 'REMOVE_PET';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receivePets = pets => ({
  type: RECEIVE_PETS,
  pets
});

const receivePet = pet => ({
  type: RECEIVE_PET,
  pet
});

const receiveNewPet = pet => ({
  type: RECEIVE_NEW_PET,
  pet
});

const removePet = pet => ({
  type: REMOVE_PET,
  pet
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchPets = () => dispatch => (
  APIUtil.fetchPets()
    .then(pets => dispatch(receivePets(pets)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const fetchPet = id => dispatch => (
  APIUtil.fetchPet(id)
    .then(newPet => dispatch(receivePet(newPet)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createPet = pet => dispatch => (
  APIUtil.createPet(pet)
    .then(newPet => dispatch(receivePet(newPet)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const updatePet = pet => dispatch => (
  APIUtil.updatePet(pet)
    .then(newPet => dispatch(receivePet(newPet)))
    .then(hashHistory.push('/'))
);

export const deletePet = pet => dispatch => (
  APIUtil.deletePet(pet)
    .then(newPet => dispatch(removePet(newPet)),
      err => dispatch(receiveErrors(err.responseJSON)))
);
