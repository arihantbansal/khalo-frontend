import React, { useEffect } from "react";
import { ChakraProvider, Box, VStack, Grid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import jwt_decode from "jwt-decode";

import LandingPage from "pages/LandingPage";
import Login from "pages/Login";
import SignUp from "pages/SignUp";
import Restaurants from "pages/Restaurants";
import Restaurant from "pages/RestaurantPage";
import Orders from "pages/Orders";
import ErrorPage from "pages/404";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

import theme from "utils/theme";
import { setCurrentUser, logoutUser } from "redux/authAction";
import { setAuthToken } from "utils/auth";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		// Check for token to keep user logged in
		if (localStorage.getItem("jwtToken")) {
			// Set auth token header auth
			const token = localStorage.getItem("jwtToken");
			setAuthToken(token);
			// Decode token and get user info and exp
			const decoded = jwt_decode(token);
			// Set user and isAuthenticated
			dispatch(setCurrentUser(decoded));
			// Check for expired token
			const currentTime = Date.now() / 1000; // to get in milliseconds
			if (decoded.exp < currentTime) {
				// Logout user
				dispatch(logoutUser());

				// Redirect to login
				window.location.href = "./login";
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Router>
					<NavBar />
					<Grid minH="100vh" p={3}>
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
								<Route path="/orders" exact>
									<Orders />
								</Route>
								<Route path="/restaurants/:id" exact>
									<Restaurant />
								</Route>
								<Route path="/404" exact>
									<ErrorPage />
								</Route>
								<Route path="/">
									<Redirect to="404" />
								</Route>
							</Switch>
						</VStack>
					</Grid>
					<Footer />
				</Router>
			</Box>
		</ChakraProvider>
	);
};

export default App;
