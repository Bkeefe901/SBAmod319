import express from 'express';
import { sales, shirts, users } from '../data/data.mjs';
import Sale from '../models/saleSchema.mjs';
import User from '../models/userSchema.mjs';
import Shirt from '../models/shirtSchema.mjs';


Router.get("/seed", async (req, res)=>{
    try {
        // Load DB
        await Sale.create(sales);

        res.send("Data Sucessfully seeded");
    } catch (error) {
        console.error(error.message);
    }
})