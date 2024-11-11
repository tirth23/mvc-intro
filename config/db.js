const mongoose = require("mongoose");

const dbURL = `mongodb+srv://tirthpatel23t:HWV4XSrgVGpl98Hm@cluster0.hofm6.mongodb.net/`;

/* connect to DB */
const connectDb = async () => {
	try {
		await mongoose.connect(dbURL);
		console.log("Connected to MongoDB");
	} catch (err) {
		console.log(err);
	}
};

module.exports = connectDb;
