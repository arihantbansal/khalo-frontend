import axios from "axios";
import { setAuthToken } from "utils/auth";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./actionTypes";

const baseURL = "http://localhost:4001/";

// Register User
export const registerUser = (userData, history) => dispatch => {
	axios
		.post(`${baseURL}/api/users/`, userData)
		.then(res => history.push("/login"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Login - get user token
export const loginUser = userData => dispatch => {
	axios
		.post(`${baseURL}/api/login/`, userData)
		.then(res => {
			const { token } = res.data;
			localStorage.setItem("jwtToken", token);
			setAuthToken(token);
			const decoded = jwt_decode(token);
			dispatch(setCurrentUser(decoded));
			console.log("done");
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data,
			})
		);
};

// Set logged in user
export const setCurrentUser = decoded => {
	return {
		type: SET_CURRENT_USER,
		payload: decoded,
	};
};

// User loading
export const setUserLoading = () => {
	return {
		type: USER_LOADING,
	};
};

// Log user out
export const logoutUser = () => dispatch => {
	// Remove token from local storage
	localStorage.removeItem("jwtToken");
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to empty object {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};
