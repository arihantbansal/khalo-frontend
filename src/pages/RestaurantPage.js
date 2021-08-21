import { useState, useEffect } from "react";
import {
	Box,
	Heading,
	Spinner,
	Flex,
	Button,
	Text,
	SimpleGrid,
	useToast,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
import restaurantService from "services/restaurants";
import Meal from "components/Meal";

const Restaurant = () => {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState(null);
	const [loading, setLoading] = useState(true);
	const [orderTotal, setOrderTotal] = useState(0);
	// const dispatch = useDispatch();
	const toast = useToast();

	useEffect(() => {
		const getData = async () => {
			const curr = await restaurantService.getSingle(id);
			setRestaurant(curr);
			setLoading(false);
		};

		getData();
	}, [id]);

	const checkNew = index => {
		const { meals } = restaurant;
		const { createdAt } = meals[index];
		const date = new Date(createdAt).valueOf();
		const now = Date.now();

		setRestaurant({
			...restaurant,
			meals: [
				...meals.slice(0, index),
				{ ...meals[index], isNew: now - date < 604800000 },
				...meals.slice(index + 1),
			],
		});
	};

	const onIncrement = index => {
		const { meals } = restaurant;
		const { total } = meals[index];

		const newRes = {
			...restaurant,
			meals: [
				...meals.slice(0, index),
				{ ...meals[index], total: (total || 0) + 1 },
				...meals.slice(index + 1),
			],
		};

		console.log(newRes);

		setRestaurant({
			...restaurant,
			meals: [
				...meals.slice(0, index),
				{ ...meals[index], total: (total || 0) + 1 },
				...meals.slice(index + 1),
			],
		});

		toast({
			title: `Added ${meals[index].name} to cart`,
			status: "success",
			duration: 1500,
			isClosable: true,
		});
	};

	const onDecrement = index => {
		const { meals } = restaurant;
		const { total } = meals[index];
		if (!total) return;

		setRestaurant({
			...restaurant,
			meals: [
				...meals.slice(0, index),
				{ ...meals[index], total: total - 1 },
				...meals.slice(index + 1),
			],
		});

		toast({
			title: `Removed ${meals[index].name} to cart`,
			status: "success",
			duration: 1500,
			isClosable: true,
		});
	};

	const handleOrderSubmit = async () => {
		const payload = {
			total: restaurant.meals.reduce((acc, curr) => {
				return acc + curr.total;
			}, 0),
			meals: restaurant.meals.map(meal => meal.id),
			restaurant: id,
		};

		// const res = await restaurantService.createOrder(payload);
	};

	if (loading) {
		return (
			<Flex justifyContent="center" alignItems="center">
				<Spinner
					thickness="4px"
					speed="0.65s"
					emptyColor="gray.200"
					color="blue.500"
					size="xl"
				/>
			</Flex>
		);
	}

	return (
		<Box>
			<Flex
				direction="column"
				alignItems="center"
				justifyContent="space-between"
				width="80vw">
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
				<Flex my={5}>
					<SimpleGrid
						columns={{ base: 1, md: 3 }}
						spacing={{ base: 2, lg: 5 }}
						spacingY={{ base: 2, lg: 5 }}>
						{restaurant.meals.map((meal, idx) => (
							<Meal
								key={idx}
								meal={meal}
								onIncrement={() => onIncrement(idx)}
								onDecrement={() => onDecrement(idx)}
								checkNew={() => checkNew(idx)}
							/>
						))}
					</SimpleGrid>
				</Flex>
				<Flex justifyContent="center" alignItems="center">
					<Box mr={3}>
						<Text fontSize="lg">Total: {orderTotal}</Text>
					</Box>
					<Button colorScheme="cyan" onClick={handleOrderSubmit}>
						Place Order
					</Button>
				</Flex>
			</Flex>
		</Box>
	);
};

export default Restaurant;
