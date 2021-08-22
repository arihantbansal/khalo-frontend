import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import orderService from "services/orders";

const Orders = () => {
	const [orders, setOrders] = useState(null);
	const [loading, setLoading] = useState(true);
	const user = useSelector(state => state);

	useEffect(() => {
		const getOrders = async () => {
			console.log("user", user);
			const userOrders = await orderService.getUserOrder(user);
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

	return <Box></Box>;
};

export default Orders;
