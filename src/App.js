import React from "react";
import {
	ChakraProvider,
	Box,
	Link,
	VStack,
	Grid,
	theme,
} from "@chakra-ui/react";
import Home from "components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Login from "pages/Login";
import Navbar from "components/Navbar";

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid minH="100vh" p={3}>
					<Navbar />
					<VStack spacing={8}>
						<Router>
							<Switch>
								<Route path="/" exact>
									<Home />
								</Route>
								<Route path="/landing" exact>
									<LandingPage />
								</Route>
								<Route path="/login" exact>
									<Login />
								</Route>
							</Switch>
						</Router>
					</VStack>
				</Grid>
			</Box>
		</ChakraProvider>
	);
};

export default App;
