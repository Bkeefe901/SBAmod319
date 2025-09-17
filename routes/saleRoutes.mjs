import express from 'express';
import {sales} from '../data/data.mjs'


Router.get("/seed", async (req, res)=>{
    try {
        // Load DB
        await shirtShop.create(sales);

        res.send("Data Sucessfully seeded");
    } catch (error) {
        console.error(error.message);
    }
})