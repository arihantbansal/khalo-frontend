import {
	Flex,
	Spinner,
	Table,
	TableCaption,
	Thead,
	Tr,
	Th,
	Td,
	Tbody,
	Heading,
	Text,
	Button,
	VStack,
	Link,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import orderService from "services/orders";
import { Link as RouterLink } from "react-router-dom";

const Orders = () => {
	const [orders, setOrders] = useState(null);
	const [loading, setLoading] = useState(true);
	const user = useSelector(state => state.auth.user);

	useEffect(() => {
		const getOrders = async () => {
			const userOrders = await orderService.getUserOrder(user.id);
			setOrders(userOrders);
			setLoading(false);
		};

		// getOrders();
		setOrders([]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
		<Flex>
			{orders.length > 0 && (
				<Table variant="simple">
					<TableCaption>Your Orders</TableCaption>
					<Thead>
						<Tr>
							<Th>Restaurant</Th>
							<Th>Total Cost</Th>
							<Th>Date</Th>
						</Tr>
					</Thead>
					<Tbody>
						{orders.map(order => (
							<Tr key={order.id}>
								<Td>{`${order.restaurant.name}`}</Td>
								<Td>{`₹ ${order.total}`}</Td>
								<Td>{`${new Date(order.createdAt).toString()}`}</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			)}
			{orders.length === 0 && (
				<VStack spacing={5} justifyContent="center" alignItems="center">
					<Heading color="cyan.100" mb={5}>
						Oops, you haven't ordered anything yet.
					</Heading>
					<Text mt={5}>
						Order some mouth-watering food now. Go check out the restaurants in
						your town!
					</Text>
					<Link as={RouterLink} to="/restaurants">
						<Button
							colorScheme="teal"
							bg={"primary.600"}
							rounded={"full"}
							mt={10}
							px={6}
							_hover={{
								bg: "primary.200",
							}}>
							Order Now
						</Button>
					</Link>
				</VStack>
			)}
		</Flex>
	);
};

export default Orders;
