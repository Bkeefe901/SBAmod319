// Imports
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/conn.mjs';
import userRoutes from './routes/userRoute.mjs';
import shirtRoutes from './routes/shirtRoutes.mjs';
import saleRoutes from './routes/saleRoutes.mjs';



// Setup
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

// DB connection
connectDB();


// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/shirts", shirtRoutes);
app.use("/api/sales", saleRoutes);

// Global Error-Handling Middleware
app.use((err, req, res, next)=>{
    res.status(500).json({msg: `❌ Error - ${err.message}`});
})

// Listener
app.listen(PORT, ()=>{
    console.log(`Server running on Port: ${PORT}`);
})

