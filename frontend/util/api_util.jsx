export const signupUser = user => (
  $.ajax({
    method: 'POST',
    url: './api/users',
    data: { user }
  })
);

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
export const updateShelter = shelter => (
  $.ajax({
    method: 'PATCH',
    url: `./api/shelters/${shelter.id}`,
    data: { shelter }
  })
);

export const deleteShelter = id => (
  $.ajax({
    method: 'DELETE',
    url: `.api/shelters/${id}`
  })
);
