import { VStack, Text, Link, Code } from "@chakra-ui/react";
import { Logo } from "Logo";

const Home = () => {
	return (
		<>
			<Logo h="40vmin" pointerEvents="none" />
			<Text>
				Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
			</Text>
			<Link
				color="teal.500"
				href="https://chakra-ui.com"
				fontSize="2xl"
				target="_blank"
				rel="noopener noreferrer">
				Learn Chakra
			</Link>
		</>
	);
};

export default Home;
