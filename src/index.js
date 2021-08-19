import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	<>
		<ColorModeScript />
		<Provider store={store}>
			<App />
		</Provider>
	</>,
	document.getElementById("root")
);
