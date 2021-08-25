/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN;
const baseUrl = `${domain}/api/users`;

const addUser = async userData => {
	const response = await axios.post(baseUrl, userData);
	return response.data;
};

const updateUser = async userData => {
	const response = await axios.put(`${baseUrl}/${userData.id}`, userData);
	return response.data;
};

const deleteUser = async id => {
	const response = await axios.delete(`${baseUrl}/${id}`);
	return response.data;
};

export default {
	addUser,
	updateUser,
	deleteUser,
};
