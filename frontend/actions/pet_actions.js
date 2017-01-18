import * as APIUtil from '../util/api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_PET = 'RECEIVE_PET';
export const RECEIVE_NEW_PET = 'RECEIVE_NEW_PET';
export const RECEIVE_PETS = 'RECEIVE_PETS';
export const REMOVE_PET = 'REMOVE_PET';
export const RECEIVE_PET_ERRORS = 'RECEIVE_PET_ERRORS';
export const CLEAR_PET_ERRORS = 'CLEAR_PET_ERRORS';
export const CLEAR_PETS = 'CLEAR_PETS';

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

const receivePetErrors = errors => ({
  type: RECEIVE_PET_ERRORS,
  errors
});

export const clearPetErrors = () => ({
  type: CLEAR_PET_ERRORS,
});

export const clearPets = () => ({
  type: CLEAR_PETS,
});

export const fetchPets = () => dispatch => (
  APIUtil.fetchPets()
    .then(pets => dispatch(receivePets(pets)),
      err => dispatch(receivePetErrors(err.responseJSON)))
);

export const fetchPet = id => dispatch => (
  APIUtil.fetchPet(id)
    .then(newPet => dispatch(receivePet(newPet)),
      err => dispatch(receivePetErrors(err.responseJSON)))
);

export const createPet = pet => dispatch => (
  APIUtil.createPet(pet)
    .then(newPet => dispatch(receivePet(newPet)),
      err => dispatch(receivePetErrors(err.responseJSON)))
);

export const updatePet = pet => dispatch => (
  APIUtil.updatePet(pet)
    .then(newPet => dispatch(receivePet(newPet)),
      err => dispatch(receivePetErrors(err.responseJSON)))
);

export const deletePet = id => dispatch => (
  APIUtil.deletePet(id)
    .then(pet => dispatch(removePet(pet)),
      err => dispatch(receivePetErrors(err.responseJSON)))
);
