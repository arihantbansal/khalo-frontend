const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	description: { type: String, required: true },
	meals: [{ type: mongoose.Schema.ObjectId, ref: "Meal" }],
});

restaurantSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
