const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		product_name: {
			type: String,
			required: true,
		},
		product_price: {
			type: String,
			required: true,
		},
		isInStock: {
			type: Boolean,
			default: true,
		},
		category: {
			type: [String],
			required: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
		},
		confirmPassword: {
			type: String,
			required: true,
			minLength: 8,
			validate: {
				validator: function () {
					return this.password === this.confirmPassword;
				},
				message: "Password and confirm password should be same",
			},
		},
	},
	{ timestamps: true }
);

/* 
pre("save") hook is called 
Before a document is saved to the database — specifically, whenever ProductModel.create() or product.save() is used.
Only for save operations — the pre("save") hook does not trigger on other operations like update or delete 
*/
const validCategories = ["electronics", "fashion", "appliances", "furniture"];
productSchema.pre("save", function (next) {
	console.log("pre save hook 1");
	const invalidCategories = this.category.filter(
		(category) => !validCategories.includes(category)
	);
	if (invalidCategories.length) {
		// throw new Error("Invalid categories");
		return next(new Error(`Invalid categories ${invalidCategories.join(",")}`));
	} else {
		next();
	}
});

productSchema.pre("save", function () {
  console.log("pre save hook 2");
  /* confirmPassword won't be stored in DB */
	this.confirmPassword = undefined;
});

const ProductModel = mongoose.model("products", productSchema);

module.exports = ProductModel;
