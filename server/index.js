import express from "express";
import User from "./routes/User.js"
import mongoConnection from "./db.js";
import cors from "cors";

const app = express();
mongoConnection();
app.use(express.json());
app.use(cors({
    origin: "*",
    credentials: true
}));



app.use("/api", User)

app.listen(5000, () => {
    console.log("APP Listening To 5000")
})