const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		total: { type: Number, required: true },
		status: { type: String, required: true, default: "placed" },
		description: { type: String, required: true },
		meals: [{ type: mongoose.Schema.ObjectId, ref: "Meal" }],
		user: { type: mongoose.Schema.ObjectId, ref: "User" },
		restaurant: { type: mongoose.Schema.ObjectId, ref: "Restaurant" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
