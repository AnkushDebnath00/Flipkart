import mongoose, { mongo } from "mongoose";

export const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@cluster0.whywxej.mongodb.net/?retryWrites=true`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error while connecting to database", error.message);
  }
};

export default Connection;
