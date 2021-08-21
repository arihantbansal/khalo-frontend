const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
	{
		total: { type: Number, required: true },
		status: { type: String, required: true, default: "placed" },
		meals: [{ type: mongoose.Schema.ObjectId, ref: "Meal" }],
		user: { type: mongoose.Schema.ObjectId, ref: "User" },
		restaurant: { type: mongoose.Schema.ObjectId, ref: "Restaurant" },
	},
	{ timestamps: true }
);

orderSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

module.exports = mongoose.model("Order", orderSchema);
