const mealsRouter = require("express").Router();
const lodash = require("lodash");
const Meal = require("../models/meal");
const auth = require("../utils/auth");

mealsRouter.get("/", auth.hasRole("user"), async (req, res) => {
	const meals = await Meal.find({});
	res.json(meals.map(meal => meal.toJSON()));
});

mealsRouter.get("/:id", auth.hasRole("user"), async (req, res) => {
	const { id } = req.params;
	const meal = await Meal.findById(id);

	res.json(meal.toJSON());
});

mealsRouter.post("/", auth.hasRole("manager"), async (req, res) => {
	const { name, price, description, image } = req.body;
	const meal = await Meal.create({
		name,
		price,
		description,
		image,
	});

	res.json(meal.toJSON());
});

mealsRouter.put("/:id", auth.hasRole("manager"), async (req, res) => {
	const { id } = req.params;
	const meal = await Meal.findById(id);

	const updatedMeal = lodash.merge(meal, req.body);

	const newMeal = await Meal.findByIdAndUpdate(id, updatedMeal, {
		new: true,
	});

	if (newMeal) {
		res.status(200).json(newMeal.toJSON());
	} else {
		res.status(404).end();
	}
});

mealsRouter.delete("/:id", auth.hasRole("manager"), async (req, res) => {
	const { id } = req.params;
	const meal = await Meal.findByIdAndRemove(id);

	if (meal) {
		res.status(200).end();
	} else {
		res.status(404).end();
	}
});

module.exports = mealsRouter;
