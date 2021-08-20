/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "http://localhost:4001/api/login";

const login = async userData => {
	const response = await axios.post(baseUrl, userData);
	return response.data;
};

const updateRestaurant = async restaurant => {
	const response = await axios.put(`${baseUrl}/${restaurant.id}`, restaurant);
	return response.data;
};

const deleteRestaurant = async id => {
	const response = await axios.delete(`${baseUrl}/${id}`);
	return response.data;
};

export default {
	login,
};
