import React, { useEffect, useState } from "react";
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
import About from "pages/About";
import Restaurants from "pages/Restaurants";
import Restaurant from "pages/RestaurantPage";
import Orders from "pages/Orders";
import ErrorPage from "pages/404";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

import theme from "utils/theme";
import { setCurrentUser, logoutUser } from "redux/authAction";
import { setAuthToken } from "utils/auth";

const App = () => {
	const [token, setToken] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		// Check for token to keep user logged in
		if (localStorage.getItem("jwtToken")) {
			// Set auth token header auth
			const jwtToken = localStorage.getItem("jwtToken");
			setToken(jwtToken);
			setAuthToken(jwtToken);
			// Decode token and get user info and exp
			const decoded = jwt_decode(jwtToken);
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
									{token ? <Redirect to="/restaurants" /> : <Login />}
								</Route>
								<Route path="/signup" exact>
									<SignUp />
								</Route>
								<Route path="/about" exact>
									<About />
								</Route>
								<Route path="/restaurants" exact>
									{token ? <Restaurants /> : <Redirect to="/login" />}
								</Route>
								<Route path="/orders" exact>
									{token ? <Orders /> : <Redirect to="/login" />}
								</Route>
								<Route path="/restaurants/:id" exact>
									{token ? <Restaurant /> : <Redirect to="/login" />}
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
