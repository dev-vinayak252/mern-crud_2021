import axios from 'axios';
import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  USER_ERRORS
} from './types';

export const addUser = (userData) => async (dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    const res = await axios.post('/api/users/addUser', userData, config);
    dispatch({
      type: ADD_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: USER_ERRORS,
      payload: err.response
    });
  }
};