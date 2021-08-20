// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};

// 3. Add your theme colors
const colors = {
	primary: {
		100: "#E5FCF1",
		200: "#27EF96",
		300: "#10DE82",
		400: "#0EBE6F",
		500: "#0CA25F",
		600: "#0A864F",
		700: "#086F42",
		800: "#075C37",
		900: "#064C2E",
	},
};

// 4. extend the theme
const theme = extendTheme({ config, colors });

export default theme;