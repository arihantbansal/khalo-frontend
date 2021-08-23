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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import orderService from "services/orders";

const Orders = () => {
	const [orders, setOrders] = useState(null);
	const [loading, setLoading] = useState(true);
	const user = useSelector(state => state.auth.user);

	useEffect(() => {
		const getOrders = async () => {
			const userOrders = await orderService.getUserOrder(user.id);
			console.log("uo", userOrders);
			setOrders(userOrders);
			setLoading(false);
		};

		getOrders();
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
		</Flex>
	);
};

export default Orders;
