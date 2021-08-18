const restaurantsRouter = require("express").Router();
const lodash = require("lodash");
const Restaurant = require("../models/restaurant");
const Meal = require("../models/Meal");
const auth = require("../utils/auth");

restaurantsRouter.get("/", auth.hasRole("user"), async (req, res) => {
	const restaurants = await Restaurant.find({});
	res.json(restaurants.map(restaurant => restaurant.toJSON()));
});

restaurantsRouter.get("/:id", auth.hasRole("user"), async (req, res) => {
	const { id } = req.params;
	const restaurant = await Restaurant.findById(id).populate("meals");

	res.json(restaurant.toJSON());
});

restaurantsRouter.post("/", auth.hasRole("manager"), async (req, res) => {
	const { meals, restaurant } = req.body;
	const newRestaurant = Restaurant.create({
		name: restaurant.name,
		meals: meals.map(
			meal =>
				new Meal({
					name: meal.name,
					price: meal.price,
					description: meal.description,
					// image: meal.image,
					restaurant: restaurant._id,
				})
		),
	});

	res.json(await newRestaurant.populate("meals").toJSON());
});

restaurantsRouter.put("/:id", auth.hasRole("manager"), async (req, res) => {
	const { id } = req.params;
	const restaurant = await Restaurant.findById(id).populate("meals");

	const updatedRestaurant = lodash.merge(restaurant, req.body);

	const newRestaurant = await Restaurant.findByIdAndUpdate(
		id,
		updatedRestaurant,
		{
			new: true,
		}
	);

	if (newRestaurant) {
		res.status(200).json(newRestaurant.toJSON());
	} else {
		res.status(404).end();
	}
});

restaurantsRouter.delete("/:id", auth.hasRole("manager"), async (req, res) => {
	const { id } = req.params;
	const restaurant = await Restaurant.findByIdAndRemove(id);

	if (restaurant) {
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

module.exports = restaurantsRouter;
