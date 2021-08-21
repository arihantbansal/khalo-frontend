import { useState, useEffect } from "react";
import {
	Flex,
	Circle,
	Box,
	Image,
	Badge,
	Icon,
	IconButton,
	Skeleton,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Meal = ({ meal, onIncrement, onDecrement }) => {
	const [data, setData] = useState(meal);

	useEffect(() => {
		let { createdAt } = data;
		let date = new Date(createdAt);
		let now = Date.now();

		setData({
			...data,
			isNew: now - date < 604800000,
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Flex p={50} w="full" alignItems="center" justifyContent="center">
			<Box
				bg={"gray.800"}
				maxW="sm"
				borderWidth="1px"
				rounded="lg"
				shadow="lg"
				position="relative">
				{data?.isNew && (
					<Circle
						size="10px"
						position="absolute"
						top={2}
						right={2}
						bg="red.200"
					/>
				)}

				<Image
					src={data.image}
					alt={`Picture of ${data.name}`}
					roundedTop="lg"
					boxSize="200"
					objectFit="cover"
					fallback={
						<Skeleton
							startColor="primary.200"
							endColor="primary.900"
							height="200px"
						/>
					}
				/>

				<Box p="6">
					<Box d="flex" alignItems="baseline">
						{data?.isNew && (
							<Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
								New
							</Badge>
						)}
					</Box>
					<Flex
						mt={1}
						mb={2}
						justifyContent="space-between"
						alignContent="center">
						<Box
							fontSize="2xl"
							fontWeight="semibold"
							as="h4"
							lineHeight="tight"
							isTruncated>
							{data.name}
						</Box>
					</Flex>

					<Flex justifyContent="space-between" alignContent="center">
						<Box fontSize="xl" color={"white"} mr={3}>
							<Box as="span" color={"gray.600"} fontSize="lg">
								₹
							</Box>{" "}
							{data.price.toFixed(2)}
						</Box>
						<Box d="flex">
							<IconButton
								aria-label="add"
								icon={<FaPlus />}
								onClick={onIncrement}
								mr={2}
								size="sm"
							/>
							{data?.total || 0}
							<IconButton
								aria-label="subtract"
								icon={<FaMinus />}
								onClick={onDecrement}
								ml={2}
								size="sm"
							/>
						</Box>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default Meal;
