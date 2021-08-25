import {
	Box,
	Flex,
	Heading,
	Text,
	Avatar,
	Center,
	Stack,
	Button,
	Link,
	Image,
	useMediaQuery,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import order from "assets/food_order.svg";

const About = () => {
	const [isNotSmallerScreen] = useMediaQuery("(min-width:770px)");

	return (
		<Box>
			<Heading
				as="h1"
				fontSize="50px"
				marginTop="30px"
				marginBottom="100px"
				color={"primary.400"}>
				About khalo
			</Heading>
			<Flex
				alignItems="center"
				direction={isNotSmallerScreen ? "row" : "column"}>
				<Box textAlign="left">
					<Text color={"gray.500"} maxW={"3xl"}>
						Do you have the fear of losing your money in the stock market? Do
						you want to try the market out without putting your money at stake?
						Well,{" "}
						<Text as={"span"} color={"primary.400"}>
							StonkR
						</Text>{" "}
						is here for you!
					</Text>
					<Text color={"gray.500"} maxW={"3xl"} marginTop="20px">
						Use the{" "}
						<Text as={"span"} color={"primary.400"}>
							StonkR
						</Text>{" "}
						website to try mock trading using REAL stock market data from the
						USA stock market. The{" "}
						<Text as={"span"} color={"primary.400"}>
							Dashboard
						</Text>{" "}
						page shows you your portfolio, which includes your investments and
						assets.
					</Text>
					<Text color={"gray.500"} maxW={"3xl"} marginTop="20px">
						Thinking about investing in mutual funds instead? Head over to the{" "}
						<Text as={"span"} color={"primary.400"}>
							Calculators
						</Text>{" "}
						page and check out how much returns you could get if you invest by
						using our{" "}
						<Text as={"span"} color={"primary.400"}>
							SIP Calculator
						</Text>{" "}
						or the{" "}
						<Text as={"span"} color={"primary.400"}>
							Lumpsum Calculator
						</Text>
						. Even better, your profits are adjusted for inflation! So you know,
						exactly how much your profits will be after maturity!
					</Text>
				</Box>

				<Box>
					<Image src={order} w="300px" />{" "}
				</Box>
			</Flex>
			<Text as="h2" fontSize="35px" marginTop="120px" marginBottom="70px">
				Meet the Developer
			</Text>
			<Box>
				<Center py={6}>
					<Box
						maxW={"320px"}
						w={"full"}
						boxShadow="xl"
						borderRadius="20px"
						p={6}
						textAlign={"center"}
						bg="gray.700">
						<Avatar
							size={"xl"}
							src={"https://avatars.githubusercontent.com/u/17180950?v=4"}
							alt={"Avatar Alt"}
							mb={4}
							pos={"relative"}
						/>
						<Heading fontSize={"2xl"} fontFamily={"body"} marginBottom="20px">
							Arihant Bansal
						</Heading>
						<Text fontWeight={600} color={"gray.400"} mb={4}>
							Undergrad @ BITS Goa
						</Text>

						<Stack mt={8} direction={"row"} spacing={4}>
							<Link
								className="meet-dev-button"
								href={"https://www.linkedin.com/in/arihantbansal/"}>
								<Button
									flex={1}
									height="50px"
									width="50px"
									fontSize={"sm"}
									rounded={"full"}
									bg={"blue.400"}
									color={"white"}
									boxShadow={
										"0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
									}
									_hover={{
										bg: "blue.500",
									}}
									_focus={{
										bg: "blue.500",
									}}>
									<FaLinkedin className="meet-dev-socials" />
								</Button>
							</Link>
							<Link
								className="meet-dev-button"
								href={"https://github.com/arihantbansal"}>
								<Button
									flex={1}
									height="50px"
									width="50px"
									fontSize={"sm"}
									rounded={"full"}
									bg={"gray.500"}
									color={"white"}
									boxShadow={
										"0px 1px 25px -5px rgb(140 140 140 / 48%), 0 10px 10px -5px rgb(140 140 140 / 43%)"
									}
									_hover={{
										bg: "primary.600",
									}}
									_focus={{
										bg: "primary.600",
									}}>
									<FaGithub className="meet-dev-socials" />
								</Button>
							</Link>
						</Stack>
					</Box>
				</Center>
			</Box>
		</Box>
	);
};

export default About;
