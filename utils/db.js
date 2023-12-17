import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true, // Corrected option name
      useUnifiedTopology: true,
    });
  } catch (error) {
    throw new Error(error);
  }
};
export default connect;
