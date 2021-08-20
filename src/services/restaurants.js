/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "http://localhost:4001/api/restaurants";
const tokenStr = localStorage.getItem("jwtToken");
const header = { headers: { Authorization: `Bearer ${tokenStr}` } };

const getAll = async () => {
	const response = await axios.get(baseUrl, header);
	return response.data;
};

const getSingle = async id => {
	const response = await axios.get(`${baseUrl}/${id}`, header);
	return response.data;
};

const createNew = async content => {
	const object = { content, votes: 0 };
	const response = await axios.post(baseUrl, object, header);
	return response.data;
};

const updateRestaurant = async restaurant => {
	const response = await axios.put(
		`${baseUrl}/${restaurant.id}`,
		restaurant,
		header
	);
	return response.data;
};

const deleteRestaurant = async id => {
	const response = await axios.delete(`${baseUrl}/${id}`, header);
	return response.data;
};

export default {
	getAll,
	getSingle,
	createNew,
	updateRestaurant,
	deleteRestaurant,
};
