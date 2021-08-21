/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "http://localhost:4001/api/orders";
const tokenStr = localStorage.getItem("jwtToken");
const header = { headers: { Authorization: `Bearer ${tokenStr}` } };

const createNew = async content => {
	const response = await axios.post(baseUrl, content, header);
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
	createNew,
	updateRestaurant,
	deleteRestaurant,
};
