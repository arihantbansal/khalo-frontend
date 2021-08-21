import { useState } from "react";
import {
	Box,
	GridItem,
	useColorModeValue,
	Button,
	Center,
	Flex,
	SimpleGrid,
	VisuallyHidden,
	Input,
	Text,
	Heading,
	Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import loginService from "services/login";
import { setCurrentUser } from "redux/authAction";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "utils/auth";
import { useDispatch } from "react-redux";

const SignUp = () => {
	const [inputValues, setInputValues] = useState(null);
	const dispatch = useDispatch();

	const handleInputChange = event => {
		const target = event.target;
		const { value, name } = target;

		console.log(value, name);

		setInputValues(prevValues => {
			return {
				...prevValues,
				[name]: value,
			};
		});
	};

	const signupSubmit = async e => {
		e.preventDefault();

		const userData = {
			name: inputValues?.name,
			username: inputValues?.username,
			password: inputValues?.password,
		};

		const resData = await loginService.login(userData);
		const { token } = resData;
		localStorage.setItem("jwtToken", token);
		setAuthToken(token);
		const decoded = jwt_decode(token);
		dispatch(setCurrentUser(decoded));
	};

	return (
		<Box px={8} py={24} mx="auto">
			<SimpleGrid
				alignItems="center"
				w={{ base: "full", xl: 11 / 12 }}
				columns={{ base: 1, lg: 11 }}
				gap={{ base: 0, lg: 24 }}
				mx="auto">
				<GridItem
					colSpan={{ base: "auto", lg: 7 }}
					textAlign={{ base: "center", lg: "left" }}>
					<Heading
						as="h1"
						mb={4}
						fontSize={{ base: "3xl", md: "4xl" }}
						fontWeight="bold"
						lineHeight={{ base: "shorter", md: "none" }}
						color={useColorModeValue("gray.900", "gray.200")}
						letterSpacing={{ base: "normal", md: "tight" }}>
						Hungry?
					</Heading>
					<Text
						mb={{ base: 10, md: 4 }}
						fontSize={{ base: "lg", md: "xl" }}
						fontWeight="thin"
						color="gray.500"
						letterSpacing="wider">
						Join now to order from the best restaurants in town!
					</Text>
				</GridItem>
				<GridItem colSpan={{ base: "auto", md: 4 }}>
					<Box as="form" mb={6} rounded="lg" shadow="xl">
						<Center pb={0} color={useColorModeValue("gray.700", "gray.600")}>
							<p pt={2}>SignUp</p>
						</Center>
						<SimpleGrid
							columns={1}
							px={6}
							py={4}
							spacing={4}
							borderBottom="solid 1px"
							borderColor={useColorModeValue("gray.200", "gray.700")}>
							<Flex>
								<VisuallyHidden>Name</VisuallyHidden>
								<Input
									mt={0}
									type="name"
									placeholder="Name"
									required="true"
									value={inputValues?.name || ""}
									name="name"
									htmlFor="name"
									onChange={handleInputChange}
								/>
							</Flex>
							<Flex>
								<VisuallyHidden>Username</VisuallyHidden>
								<Input
									mt={0}
									type="text"
									placeholder="Username"
									required="true"
									value={inputValues?.username || ""}
									name="username"
									htmlFor="username"
									onChange={handleInputChange}
								/>
							</Flex>
							<Flex>
								<VisuallyHidden>Password</VisuallyHidden>
								<Input
									mt={0}
									type="password"
									placeholder="Password"
									required="true"
									value={inputValues?.password || ""}
									name="password"
									htmlFor="password"
									onChange={handleInputChange}
								/>
							</Flex>
							<Button colorScheme="gray" w="full" py={2} type="submit">
								Sign up for free
							</Button>
						</SimpleGrid>
					</Box>
					<Text fontSize="xs" textAlign="center" color="gray.600">
						By signing up you agree to our{" "}
						<Link color="gray.500">Terms of Service</Link>
					</Text>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default SignUp;
