
// Session

export const login = user => (
  $.ajax({
    method: 'POST',
    url: './api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: './api/session'
  })
);

// Users

export const signupUser = user => (
  $.ajax({
    method: 'POST',
    url: './api/users',
    data: { user }
  })
);

export const fetchUser = id => (
  $.ajax({
    url: `./api/users/${id}`
  })
);

export const updateUser = userWithID => {
  const user = {
    username: userWithID.username,
    email: userWithID.email,
  };

  return (
    $.ajax({
    method: 'PATCH',
    url: `./api/users/${userWithID.id}`,
    data: { user }
    })
  );
};

export const deleteUser = id => (
  $.ajax({
    method: 'DELETE',
    url: `./api/users/${id}`
  })
);

// Shelters

export const fetchShelters = () => (
  $.ajax({
    url: `./api/shelters`,
  })
);

export const fetchShelter = id => (
  $.ajax({
    url: `./api/shelters/${id}`,
  })
);

export const createShelter = shelter => (
  $.ajax({
    method: 'POST',
    url: './api/shelters',
    data: { shelter }
  })
);

export const updateShelter = shelterWithID => {
  const shelter = {
    shelter_name: shelterWithID.shelter_name,
    email: shelterWithID.email,
    address: shelterWithID.address,
    phone_number: shelterWithID.phone_number,
    shelter_image: shelterWithID.shelter_image
  };

  return (
    $.ajax({
    method: 'PATCH',
    url: `./api/shelters/${shelterWithID.id}`,
    data: { shelter }
    })
  );
};

export const deleteShelter = id => (
  $.ajax({
    method: 'DELETE',
    url: `./api/shelters/${id}`
  })
);

// Pets

export const fetchPets = () => (
  $.ajax({
    url: `./api/pets`,
  })
);

export const fetchPet = id => (
  $.ajax({
    url: `./api/pets/${id}`,
  })
);

export const createPet = pet => (
  $.ajax({
    method: 'POST',
    url: './api/pets',
    data: { pet }
  })
);

export const updatePet = petWithID => {
  const pet = {
    name: petWithID.name,
    pet_type: petWithID.pet_type,
    age: petWithID.age,
    breed: petWithID.breed,
    gender: petWithID.gender,
    description: petWithID.description,
    pet_image: petWithID.pet_image
  };

  return (
    $.ajax({
    method: 'PATCH',
    url: `./api/pets/${petWithID.id}`,
    data: { pet }
    })
  );
};

export const deletePet = id => (
  $.ajax({
    method: 'DELETE',
    url: `./api/pets/${id}`
  })
);

// Pet Images

export const fetchPetImages = () => (
  $.ajax({
    url: `./api/pet_images`,
  })
);

export const fetchPetImage = id => (
  $.ajax({
    url: `./api/pet_images/${id}`,
  })
);

export const createPetImage = pet_image => (
  $.ajax({
    method: 'POST',
    url: './api/pet_images',
    data: { pet_image }
  })
);
export const updatePetImage = pet_image => (
  $.ajax({
    method: 'PATCH',
    url: `./api/pet_images/${pet_image.id}`,
    data: { pet_image }
  })
);

export const deletePetImage = id => (
  $.ajax({
    method: 'DELETE',
    url: `./api/pet_images/${id}`
  })
);
