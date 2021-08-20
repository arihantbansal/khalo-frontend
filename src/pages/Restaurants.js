import { useState, useEffect } from "react";
import { Box, Spinner } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import restaurantService from "services/restaurants";

const Restaurants = () => {
	const [restaurants, setRestaurants] = useState(null);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			const curr = await restaurantService.getAll();
			setRestaurants(curr);
			console.log(curr);
			setLoading(false);
		};

		getData();
	}, []);

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

	return <Box>{restaurants[0].name}</Box>;
};

export default Restaurants;
