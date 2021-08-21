import React from "react";
import { Box, Flex, Link, Heading, Text } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
	return (
		<Flex
			bg={"gray.600"}
			p={5}
			w="full"
			alignItems="center"
			justifyContent="center"
			rounded="md">
			<Box
				w="full"
				maxW="sm"
				mx="auto"
				px={4}
				py={3}
				bg={"gray.800"}
				shadow="lg"
				rounded="md">
				<Flex justifyContent="center" alignItems="center">
					<Box
						as="span"
						bg={"primary.200"}
						color={"black"}
						px={3}
						py={1}
						rounded="full"
						textTransform="uppercase"
						fontSize="xs">
						{restaurant.type}
					</Box>
				</Flex>

				<Box mt={2}>
					<Heading
						as="h1"
						fontSize="lg"
						fontWeight="bold"
						mt={2}
						color={"white"}>
						{restaurant.name}
					</Heading>
					<Text fontSize="sm" mt={2} color={"gray.300"}>
						{restaurant.description}
					</Text>
				</Box>
				<Box>
					<Flex alignItems="center" justifyContent="center" mt={4}>
						<Link
							as={RouterLink}
							to={`/restaurants/${restaurant.id}`}
							mr={2}
							color={"gray.400"}
							_hover={{ color: "gray.300" }}
							cursor="pointer">
							<AiOutlineArrowRight />
						</Link>
					</Flex>
				</Box>
			</Box>
		</Flex>
	);
};

export default RestaurantCard;
