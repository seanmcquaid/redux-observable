export const fetchUserAction = (username) => ({
  type: 'FETCH_USER',
  payload: username,
});

export const fetchUserSuccessAction = (payload) => ({
  type: 'FETCH_USER_SUCCESS',
  payload,
});
