import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const mongoUri = process.env.MONGO_URI || "mongodb+srv://anasvon0:HZMDymPg7DokGmtt@cluster0.dle0n.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0";
		const conn = await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		// process code 1 code means exit with failure, 0 means success
		process.exit(1);
	}
};