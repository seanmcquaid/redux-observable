const initialState = {
  userInfo: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USER_SUCCESS':
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
