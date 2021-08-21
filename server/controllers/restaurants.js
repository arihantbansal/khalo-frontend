const restaurantsRouter = require("express").Router();
const lodash = require("lodash");
const Restaurant = require("../models/restaurant");
const Meal = require("../models/meal");
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

	const _meals = [];

	for (let i = 0; i < meals.length; i++) {
		const meal = await Meal.create({
			name: meals[i].name,
			price: meals[i].price,
			description: meals[i].description,
			image: meals[i].image,
		});
		_meals.push(meal);
	}

	const newRestaurant = await Restaurant.create({
		name: restaurant.name,
		type: restaurant.type,
		description: restaurant.description,
		meals: _meals.map(meal => meal._id),
	});

	res.json(newRestaurant.toJSON());
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
