import { useState } from "react";
import {
	Box,
	GridItem,
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
import { Link as RouterLink, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "redux/authAction";
import loginService from "services/login";
import { setAuthToken } from "utils/auth";

const Login = () => {
	const [inputValues, setInputValues] = useState(null);
	const [userLoggedIn, setUserLoggedIn] = useState(false);
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

	const loginSubmit = async e => {
		e.preventDefault();

		const userData = {
			username: inputValues?.username,
			password: inputValues?.password,
		};

		const resData = await loginService.login(userData);
		const { token } = resData;
		localStorage.setItem("jwtToken", token);
		setAuthToken(token);

		const decoded = jwt_decode(token);
		dispatch(setCurrentUser(decoded));
		setUserLoggedIn(true);
	};

	if (userLoggedIn) {
		return <Redirect to="/dashboard" />;
	}

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
						color={"gray.200"}
						letterSpacing={{ base: "normal", md: "tight" }}>
						Hungry?
					</Heading>
					<Text
						mb={{ base: 10, md: 4 }}
						fontSize={{ base: "lg", md: "xl" }}
						fontWeight="thin"
						color="gray.500"
						letterSpacing="wider">
						Login now and order to your heart's content. <br /> Don't have an
						account yet?{" "}
						<Link as={RouterLink} to="/signup">
							Sign up
						</Link>
						.
					</Text>
				</GridItem>
				<GridItem colSpan={{ base: "auto", md: 4 }}>
					<Box as="form" mb={6} rounded="lg" shadow="xl">
						<Center pb={0} color={"gray.600"}>
							<p pt={2}>Login</p>
						</Center>
						<SimpleGrid
							columns={1}
							px={6}
							py={4}
							spacing={4}
							borderBottom="solid 1px"
							borderColor={"gray.700"}>
							<Flex>
								<VisuallyHidden>Username</VisuallyHidden>
								<Input
									mt={0}
									type="text"
									placeholder="Username"
									required={true}
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
									required={true}
									value={inputValues?.password || ""}
									name="password"
									htmlFor="password"
									onChange={handleInputChange}
								/>
							</Flex>
							<Button
								colorScheme="gray"
								w="full"
								py={2}
								type="submit"
								onClick={e => loginSubmit(e)}>
								Sign In
							</Button>
						</SimpleGrid>
					</Box>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default Login;
