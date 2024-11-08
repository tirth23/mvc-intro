const mongoose = require("mongoose");
const express = require("express");

const app = express();
app.use(express.json());

const dbURL = `mongodb+srv://tirthpatel23t:HWV4XSrgVGpl98Hm@cluster0.hofm6.mongodb.net/`;

/* connect to DB */
mongoose
	.connect(dbURL)
	.then(function (connection) {
		console.log("Connected to MongoDB");
	})
	.catch(function (err) {
		console.log(err);
	});

/* constructor provided by Mongoose to define a new schema. It takes an object that maps the structure of the documents in a collection */
const productSchema = new mongoose.Schema(
	{
		product_name: {
			type: String,
			required: true /* signifies product_name as mandatory or mongoose gives error */,
		},
		product_price: {
			type: String,
			required: true,
		},
		// isInStock: Boolean
		isInStock: {
			type: Boolean,
			default: true,
		},
		category: {
			type: String,
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
	/* automatically adds two fields to the schema: createdAt and updatedAt */
	{ timestamps: true }
);

/* 
model is a class that we construct from a schema. It provides an interface to interact with the database and perform CRUD operations

creates collection name products if not explicity created in mongoDB
Mongoose automatically pluralizes the model name to determine the collection name
if used product collection then mongoose will automatically convert to products in mongoDB

create a model named ProductModel associated with the products collection in the database. 
*/
const ProductModel = mongoose.model("products", productSchema);

/* 
post request from postman with below body
{
  "product_name": "Dyson Fan",
  "product_price": 79000,
  "category": "electronics",
  "isInStock": true,
  "password": 12345678,
  "confirmPassword": 12345678
}

document will be created:-
{
"_id":{"$oid":"672e4ebf7782b63d5511e30a"},
"product_name":"Dyson Fan",
"product_price":"79000",
"isInStock":true,"category":"electronics",
"password":"12345678",
"confirmPassword":"12345678",
"createdAt":{"$date":{"$numberLong":"1731088063538"}},
"updatedAt":{"$date":{"$numberLong":"1731088063538"}},
"__v":{"$numberInt":"0"}}
 */
app.post("/api/products", async function (req, res) {
	const body = req.body;
	console.log(body);
	try {
		// create entry in DB using create
		const product = await ProductModel.create({
			product_name: body.product_name,
			product_price: body.product_price,
			category: body.category,
			isInStock: body.isInStock,
			password: body.password,
			confirmPassword: body.confirmPassword,
		});
		console.log(product);
		return res.status(201).json({ message: "Product created successfully" });
	} catch (err) {
		console.log(err);
		return res.status(400).json({ message: err.message });
	}
});

/* get all data from model */
app.get("/api/products", async (req, res) => {
	const allProducts = await ProductModel.find();

	/* get data with particular filter */
	// const allProducts = await ProductModel.find({category: "Clothing"});

	console.log(allProducts);
	return res.status(200).json(allProducts);
});

/* GET /api/products/672e4ebf7782b63d5511e30a will respond with document that has id */
app.get("/api/products/:id", async (req, res) => {
	const id = req.params.id;
	const product = await ProductModel.findById(id);
	res.status(200).json(product);
});

/* PUT /api/products/672e4ebf7782b63d5511e30a will update document that has id */
app.put("/api/products/:id", async (req, res) => {
	//works like patch
	await ProductModel.findByIdAndUpdate(req.params.id, req.body);
	res.status(200).json({ message: "Product updated successfully" });
});

/* DELETE /api/products/672e4ebf7782b63d5511e30a will delete document that has id */
app.delete("/api/products/:id", async (req, res) => {
	await ProductModel.findByIdAndDelete(req.params.id);
	res.status(200).json({ message: "Product deleted successfully" });
});

app.listen(3000, function () {
	console.log("Server is running");
});
