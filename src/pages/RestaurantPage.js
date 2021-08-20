import { useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import restaurantService from "services/restaurants";

const Restaurant = () => {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState(null);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			const curr = await restaurantService.getSingle(id);
			setRestaurant(curr);
			console.log(curr);
			setLoading(false);
		};

		getData();
	}, [id]);

	if (loading) {
		return (
			<Spinner
				thickness="4px"
				speed="0.65s"
				emptyColor="gray.200"
				color="blue.500"
				size="xl"
			/>
		);
	}

	return <Box>{restaurant.name}</Box>;
};

export default Restaurant;
