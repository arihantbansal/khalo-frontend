import {
	Box,
	Link,
	Button,
	Container,
	Stack,
	Text,
	VisuallyHidden,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
	return (
		<Link href={href}>
			<Button
				bg={"whiteAlpha.100"}
				rounded={"full"}
				w={16}
				h={16}
				cursor={"pointer"}
				display={"inline-flex"}
				alignItems={"center"}
				justifyContent={"center"}
				transition={"background 0.3s ease"}
				_hover={{
					bg: "whiteAlpha.200",
				}}>
				<VisuallyHidden>{label}</VisuallyHidden>
				{children}
			</Button>
		</Link>
	);
};

const Footer = () => {
	return (
		<Box bg={"gray.900"} color={"gray.200"}>
			<Container
				as={Stack}
				maxW={"6xl"}
				py={4}
				direction={{ base: "column", md: "row" }}
				spacing={4}
				justify={{ base: "center", md: "space-between" }}
				align={{ base: "center", md: "center" }}>
				{/* <Logo /> */}
				<Text>© 2021 khalo. All rights reserved</Text>
				<Stack direction={"row"} spacing={6}>
					<SocialButton label={"GitHub"}>
						<FaGithub />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
