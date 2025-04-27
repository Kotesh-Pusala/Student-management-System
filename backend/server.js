import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import cors from 'cors';

import productRoutes from './routes/product.route.js';

dotenv.config();

const app = express();

// 👉 THIS LINE WAS MISSING
connectDB(); 

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
