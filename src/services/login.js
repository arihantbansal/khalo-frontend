/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "http://localhost:4001/api/login";

const login = async userData => {
	const response = await axios.post(baseUrl, userData);
	return response.data;
};

export default {
	login,
};
