// Import modules
const express = require("express");
require("express-async-errors");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const rateLimit = require("express-rate-limit");

const config = require("./utils/config");
const restaurantsRouter = require("./controllers/restaurants");
const usersRouter = require("./controllers/users");
const mealsRouter = require("./controllers/meals");
const ordersRouter = require("./controllers/orders");
const loginRouter = require("./controllers/login");
const middleware = require("./utils/middleware");

// Logger middleware
app.use(morgan("dev"));

// DB Config
mongoose
	.connect(config.MONGODB_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("connected to MongoDB");
	})
	.catch(error => {
		console.error("error connecting to MongoDB:", error.message);
	});

app.use(cors());
app.use(express.json());

app.use(
	rateLimit({
		windowMs: 10 * 1000, // 10 second window
		max: 5, // Starts blocking after 5 requests within the given window
		message:
			"Too many requests from this IP. The developer knows better than to not protect against brute force attacks =)",
	})
);

// Routes
app.use("/api/users", usersRouter);
app.use("/api/restaurants", restaurantsRouter);
app.use("/api/meals", mealsRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/login", loginRouter);

// Not doing that for now.
// Serve static assets if in production
// if (process.env.NODE_ENV === "production") {
// 	// Set static folder
// 	app.use(express.static("../build"));

// 	app.get("*", (req, res) => {
// 		res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
// 	});
// }

// Middleware
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
