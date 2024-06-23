import axios from 'axios'; // Add this line at the top
import { 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE, 
  GET_PROFILE_REQUEST, 
  GET_PROFILE_SUCCESS, 
  GET_PROFILE_FAILURE, 
  UPDATE_PROFILE_REQUEST, 
  UPDATE_PROFILE_SUCCESS, 
  UPDATE_PROFILE_FAILURE 
} from './authenticationType';
import { API_BASE_URL } from '../../config/api';


export const registerUserAction = (loginData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, loginData.data);
    const { data } = response;
    if (data.jwt) {
      localStorage.setItem('jwt', data.jwt);
    }
    console.log('register', data);
    dispatch({ type: LOGIN_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log('---', error);
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const getProfileAction = (jwt) => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/API/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`
      }
    });
    const { data } = response;
    console.log('Profile', data);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log('---', error);
    dispatch({ type: GET_PROFILE_FAILURE, payload: error.message });
  }
};

export const updateProfileAction = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}/api/users`, reqData);
    const { data } = response;
    console.log('Update Profile', data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log('---', error);
    dispatch({ type: UPDATE_PROFILE_FAILURE, payload: error.message });
  }
};