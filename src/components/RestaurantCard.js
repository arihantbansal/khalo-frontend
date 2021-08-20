import React from "react";
import { chakra, Box, Flex, useColorModeValue, Link } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const RestaurantCard = ({ restaurant }) => {
	return (
		<Flex
			bg={useColorModeValue("#F9FAFB", "gray.600")}
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
				bg={useColorModeValue("white", "gray.800")}
				shadow="lg"
				rounded="md">
				<Flex justifyContent="center" alignItems="center">
					<chakra.span
						bg={useColorModeValue("primary.200", "primary.300")}
						color={useColorModeValue("primary.800", "primary.900")}
						px={3}
						py={1}
						rounded="full"
						textTransform="uppercase"
						fontSize="xs">
						{restaurant.type}
					</chakra.span>
				</Flex>

				<Box>
					<chakra.h1
						fontSize="lg"
						fontWeight="bold"
						mt={2}
						color={useColorModeValue("gray.800", "white")}>
						{restaurant.name}
					</chakra.h1>
					<chakra.p
						fontSize="sm"
						mt={2}
						color={useColorModeValue("gray.600", "gray.300")}>
						{restaurant.description}
					</chakra.p>
				</Box>
				<Box>
					<Flex alignItems="center" justifyContent="center" mt={4}>
						<Link
							as={RouterLink}
							to={`/restaurants/${restaurant.id}`}
							mr={2}
							color={useColorModeValue("gray.800", "gray.400")}
							_hover={{ color: useColorModeValue("gray.700", "gray.300") }}
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
