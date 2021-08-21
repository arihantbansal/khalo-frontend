import { useState, useEffect } from "react";
import { Box, Heading, Spinner, VStack, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import restaurantService from "services/restaurants";
import Meal from "components/Meal";

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

	const onIncrement = index => {
		const { meals } = restaurant;
		const { total } = meals[index];
		setRestaurant({
			...restaurant,
			meals: [
				...meals.slice(0, index),
				{ ...meals[index], total: (total || 0) + 1 },
				...meals.slice(index + 1),
			],
		});
	};

	const onDecrement = index => {
		const { meals } = restaurant;
		const { total } = meals[index];
		if (!total) return;
		setRestaurant({
			meals: [
				...meals.slice(0, index),
				{ ...meals[index], total: total - 1 },
				...meals.slice(index + 1),
			],
		});
	};

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
		<Box>
			<VStack>
				<Heading mb={5}>{restaurant.name}</Heading>
				<Box
					as="span"
					bg="primary.300"
					color="black"
					px={3}
					py={1}
					rounded="full"
					textTransform="uppercase"
					fontSize="xs">
					{restaurant.type}
				</Box>
				<Flex>
					{restaurant.meals.map((meal, idx) => (
						<Meal
							meal={meal}
							onIncrement={() => onIncrement(idx)}
							onDecrement={() => onDecrement(idx)}
						/>
					))}
				</Flex>
			</VStack>
		</Box>
	);
};

export default Restaurant;
