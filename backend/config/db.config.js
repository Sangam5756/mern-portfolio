import mongoose from "mongoose";



const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("conected to db");
    } catch (error) {
        console.log("error connection to database" + error.message)
        
    }

}



export default dbconnect;
