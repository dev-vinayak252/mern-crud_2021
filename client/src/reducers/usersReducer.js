import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  USER_ERRORS
} from '../actions/types';

const initialState = {
  users: [],
  userToEdit: {},
  userErrors: []
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload
      };
    
    case ADD_USER:
      return {
        ...state,
        users: [payload, ...state.users]
      };
  
    default:
      return state;
  }
};