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
// import { loginUser } from "redux/authAction";
import loginService from "services/login";
import { setCurrentUser } from "redux/authAction";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "utils/auth";
import { useDispatch } from "react-redux";

const Login = () => {
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
						<Center pb={0} color={useColorModeValue("gray.700", "gray.600")}>
							<p pt={2}>Login</p>
						</Center>
						<SimpleGrid
							columns={1}
							px={6}
							py={4}
							spacing={4}
							borderBottom="solid 1px"
							borderColor={useColorModeValue("gray.200", "gray.700")}>
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
						{/* <Flex px={6} py={4}>
							<Button
								py={2}
								w="full"
								colorScheme="blue"
								leftIcon={
									<Icon
										mr={1}
										aria-hidden="true"
										boxSize={6}
										viewBox="0 0 24 24"
										fill="currentColor"
										stroke="transparent"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round">
										<path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
									</Icon>
								}>
								Continue with Google
							</Button>
						</Flex> */}
					</Box>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default Login;
