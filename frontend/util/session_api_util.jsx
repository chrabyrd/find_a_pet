export const signupUser = user => (
  $.ajax({
    method: 'POST',
    url: './api/users',
    data: { user }
  })
);

export const signupShelter = shelter => (
  $.ajax({
    method: 'POST',
    url: './api/shelters',
    data: { shelter }
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
