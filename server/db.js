import mongoose, { mongo } from "mongoose";


const mongoConnection = async () => {
    try {
        const isConnected = await mongoose.connect("mongodb+srv://wasif:kingofnoobs@cluster0.fmaocsf.mongodb.net/ambulance");
        if (isConnected) {
            console.log("MongoDB Connected Successfully")
        } else {
            console.log("Error Building Connection With Database")
        }
    } catch (error) {
        console.log("Error Building Connection With Database")
    }
}

export default mongoConnection;