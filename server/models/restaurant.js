const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	description: { type: String, required: true },
	_meals: [{ type: mongoose.Schema.ObjectId, ref: "Meal" }],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
