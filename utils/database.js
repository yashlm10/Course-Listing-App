import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("Mongoose is already connected")
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share-prompt",
        })
        isConnected = true;
        console.log("Mongoose connected")
    } catch (error) {
        console.log(error);
    }
}