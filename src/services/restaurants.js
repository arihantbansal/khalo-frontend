/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "http://localhost:4001/restaurants";

const getAll = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

const getSingle = async id => {
	const response = await axios.get(`${baseUrl}/${id}`);
	return response.data;
};

const createNew = async content => {
	const object = { content, votes: 0 };
	const response = await axios.post(baseUrl, object);
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
	getAll,
	getSingle,
	createNew,
	updateRestaurant,
	deleteRestaurant,
};
