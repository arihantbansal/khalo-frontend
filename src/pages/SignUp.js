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
import userService from "services/user";

const SignUp = () => {
	const [inputValues, setInputValues] = useState(null);
	const [userAdded, setUserAdded] = useState(false);

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
			username: inputValues?.username,
			password: inputValues?.password,
		};

		const resData = await userService.addUser(userData);

		if (resData.success) {
			setInputValues(null);
			setUserAdded(true);
		}
	};

	if (userAdded) {
		return <Redirect to="/login" />;
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
						Sign Up now and order to your heart's content. <br /> Already have
						an account?{" "}
						<Link as={RouterLink} to="/login">
							<Text
								as="span"
								color="primary.300"
								_hover={{ color: "primary.100" }}>
								Login
							</Text>
						</Link>
						.
					</Text>
				</GridItem>
				<GridItem colSpan={{ base: "auto", md: 4 }}>
					<Box
						as="form"
						mb={6}
						rounded="lg"
						boxShadow="md"
						bg="gray.700"
						color="gray.100">
						<Center pb={0} pt={3}>
							<p pt={2}>Sign Up</p>
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
								onClick={e => signupSubmit(e)}>
								Sign In
							</Button>
						</SimpleGrid>
					</Box>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default SignUp;
