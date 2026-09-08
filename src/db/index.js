import mongoose from "mongoose";
import { DB_Name } from "../constant.js";


const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
        console.log(`Connected to MongoDB successfully \n ${connectionInstance.connection.host}` );
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}
export default connectDB;