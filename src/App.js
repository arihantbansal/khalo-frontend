import React, { useEffect } from "react";
import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";
import LandingPage from "pages/LandingPage";
import Login from "pages/Login";
import NavBar from "components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import theme from "utils/theme";
import SignUp from "pages/SignUp";
import Restaurants from "pages/Restaurants";
import Restaurant from "pages/RestaurantPage";

import { setCurrentUser, logoutUser } from "redux/authAction";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "utils/auth";
import store from "./store";

const App = () => {
	useEffect(() => {
		// Check for token to keep user logged in
		if (localStorage.jwtToken) {
			// Set auth token header auth
			const token = localStorage.jwtToken;
			setAuthToken(token);
			// Decode token and get user info and exp
			const decoded = jwt_decode(token);
			// Set user and isAuthenticated
			store.dispatch(setCurrentUser(decoded));
			// Check for expired token
			const currentTime = Date.now() / 1000; // to get in milliseconds
			if (decoded.exp < currentTime) {
				// Logout user
				store.dispatch(logoutUser());

				// Redirect to login
				window.location.href = "./login";
			}
		}
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Router>
					<Grid minH="100vh" p={3}>
						<NavBar />
						<VStack spacing={6}>
							<Switch>
								<Route path="/" exact>
									<LandingPage />
								</Route>
								<Route path="/login" exact>
									<Login />
								</Route>
								<Route path="/signup" exact>
									<SignUp />
								</Route>
								<Route path="/restaurants" exact>
									<Restaurants />
								</Route>
								<Route path="/restaurants/:id" exact>
									<Restaurant />
								</Route>
							</Switch>
						</VStack>
					</Grid>
				</Router>
			</Box>
		</ChakraProvider>
	);
};

export default App;
