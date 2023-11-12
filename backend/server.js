import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

connectDb();

const port = process.env.PORT || 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("API IS RUNNING...");
});

app.use("/api/products", productRoutes);

app.listen(port, () => console.log(`server is running on localhost:${port}`));
