import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://devansh:devansh11@cluster0.g6xi2ah.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

//    mongodb+srv://devansh:devansh11@cluster0.g6xi2ah.mongodb.net/?