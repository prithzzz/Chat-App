import mongoose from "mongoose";

// fn to connect to mongodb database
export const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log("database connected!!!"));
        await mongoose.connect(`${process.env.MONGODB_URI}/Chatapp`);
    } catch(error) {
        console.log(error);
    }
}