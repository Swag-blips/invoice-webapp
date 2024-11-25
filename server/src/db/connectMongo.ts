import mongoose from "mongoose";

const connectMongodb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI as string);

    console.log(`connected to mongo db ${connection.connection}`);
  } catch (error: any) {
    console.log(error.message);
  }
};

export default connectMongodb;
