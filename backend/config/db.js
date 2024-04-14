import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://heybuddy:mongo12@cluster0.tyb3c7j.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.