/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const baseUrl = "http://localhost:4001/api/orders";
const tokenStr = localStorage.getItem("jwtToken");
const header = { headers: { Authorization: `Bearer ${tokenStr}` } };

const getOrderById = async id => {
	const response = await axios.get(`${baseUrl}/${id}`, header);
	return response.data;
};

const getUserOrder = async user => {
	const response = await axios.get(`${baseUrl}`, user, header);
	return response.data;
};

const getRestaurantOrders = async () => {
	const response = await axios.get(`${baseUrl}/restaurant`, header);
	return response.data;
};

const createNewOrder = async order => {
	const response = await axios.post(baseUrl, order, header);
	return response.data;
};

const updateOrder = async (id, order) => {
	const response = await axios.put(`${baseUrl}/${id}`, order, header);
	return response.data;
};

const deleteOrder = async id => {
	const response = await axios.delete(`${baseUrl}/${id}`, header);
	return response.data;
};

export default {
	getOrderById,
	getUserOrder,
	getRestaurantOrders,
	createNewOrder,
	updateOrder,
	deleteOrder,
};
