import { useState, useEffect } from "react";
import {
	Box,
	Heading,
	Spinner,
	VStack,
	SimpleGrid,
	useMediaQuery,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import restaurantService from "services/restaurants";
import RestaurantCard from "components/RestaurantCard";

const Restaurants = () => {
	const [isNotSmallerScreen] = useMediaQuery("(min-width:1024px)");
	const [restaurants, setRestaurants] = useState(null);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		const getData = async () => {
			const curr = await restaurantService.getAll();
			setRestaurants(curr);
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

	return (
		<Box px={10}>
			<VStack>
				<Heading mb={10}>Restaurants</Heading>
				<SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 20 }}>
					{restaurants.map((restaurant, idx) => (
						<RestaurantCard key={idx} restaurant={restaurant} />
					))}
				</SimpleGrid>
			</VStack>
		</Box>
	);
};

export default Restaurants;
