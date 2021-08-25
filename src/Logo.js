import { Image } from "@chakra-ui/react";
import logo from "assets/logo.png";

export const Logo = props => {
	return <Image src={logo} {...props} />;
};
