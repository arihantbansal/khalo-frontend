const config = require("./config");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getTokenFrom = request => {
	const authorization = request.get("authorization");
	if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
		return authorization.substring(7);
	}
	return null;
};

function getUserFromToken(token) {
	return jwt.verify(token, process.env.JWT_SECRET);
}

const signToken = user => {
	return jwt.sign(user, process.env.JWT_SECRET);
};

const isAuthenticated = (req, res, next) => {
	const token = getTokenFrom(req);
	if (token) {
		const user = getUserFromToken(token);
		if (user) {
			req.user = user;
			next();
		} else {
			res.status(401).send("Unauthorized");
		}
	} else {
		res.status(401).send("Unauthorized");
	}
};

const hasRole = (roleRequired, req, res, next) => {
	const { role } = req.user;

	if (!roleRequired) {
		res.status(404).send("Required role must be set");
	}

	if (!role) {
		res.status(401).send("Unauthorized");
	} else {
		const token = getTokenFrom(req);
		if (token) {
			const user = getUserFromToken(token);
			if (user) {
				if (
					// user.roles.indexOf(role) !== -1 &&
					config.ROLES.indexOf(role) >= config.ROLES.indexOf(roleRequired)
				) {
					next();
				} else {
					res.status(401).send("Unauthorized");
				}
			} else {
				res.status(401).send("Unauthorized");
			}
		} else {
			res.status(401).send("Unauthorized");
		}
	}
	// if (req.user.role === role) {
	// 	next();
	// } else {
	// 	res.status(401).send("Unauthorized");
	// }
};

module.exports = { isAuthenticated, hasRole };
