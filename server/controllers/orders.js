const ordersRouter = require("express").Router();
const lodash = require("lodash");
const StateMachine = require("javascript-state-machine");
const Order = require("../models/order");
const auth = require("../utils/auth");

const createStateMachine = order => {
	return new StateMachine({
		init: order.status,
		transitions: [
			{ name: "cancelled", from: "placed", to: "cancelled" },
			{ name: "processing", from: "placed", to: "processing" },
			{ name: "in_route", from: "processing", to: "in_route" },
			{ name: "delivered", from: "in_route", to: "delivered" },
			{ name: "received", from: "delivered", to: "received" },
		],
	});
};

ordersRouter.get("/user/:id", auth.hasRole("user"), async (req, res) => {
	const orders = await Order.find({ user: req.params.id })
		.sort("createdAt")
		.populate("restaurant");

	res.json(orders);
});

ordersRouter.get(
	"/restaurant/:id",
	auth.hasRole("manager"),
	async (req, res) => {
		const orders = await Order.find({ restaurant: req.params.id })
			.sort("createdAt")
			.populate("restaurant");

		res.json(orders.toJSON());
	}
);

ordersRouter.get("/:id", auth.hasRole("user"), async (req, res) => {
	const order = await Order.findById(req.params.id)
		.populate("meals")
		.populate("user")
		.populate("restaurant");

	if (!order) {
		res.status(404).json({ message: "Order not found" });
		return;
	}

	res.json(order.toJSON());
});

ordersRouter.post("/", auth.hasRole("user"), async (req, res) => {
	const order = await Order.create({
		total: req.body.total,
		meals: req.body.meals,
		restaurant: req.body.restaurant,
		user: req.body.user,
	});

	res.json(order.toJSON());
});

ordersRouter.put("/:id", auth.hasRole("user"), async (req, res) => {
	const { id } = req.params;
	const order = await Order.findById(id);

	if (!order) {
		res.status(404).json({ message: "Order not found" });
		return;
	}
	const fsm = createStateMachine(order);

	if (fsm.cannot(req.body.status)) {
		res.status(403).json({
			message: `Not a valid transition from ${order.status} to ${req.body.status}.`,
		});
		return;
	}

	const updatedOrder = lodash.merge(order, req.body);

	const newOrder = await Order.findByIdAndUpdate(id, updatedOrder, {
		new: true,
	});

	if (newOrder) {
		res.status(200).json(newOrder.toJSON());
	} else {
		res.status(404).end();
	}
});

ordersRouter.delete("/:id", auth.hasRole("user"), async (req, res) => {
	const { id } = req.params;
	const order = await Order.findByIdAndDelete(id);

	if (order) {
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

module.exports = ordersRouter;
