/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const domain = process.env.REACT_APP_DOMAIN;
const baseUrl = `${domain}/api/login`;

const login = async userData => {
	const response = await axios.post(baseUrl, userData);
	return response.data;
};

export default {
	login,
};
