import express from 'express';
import Shirt from '../models/shirtSchema.mjs';
import { shirts } from '../data/data.mjs';


const router = express.Router();

router.route("/seed")
    .get(async (req, res) => {
        try {
            // Load DB
            await Shirt.create(shirts);

            res.send("Data Sucessfully seeded");
        } catch (error) {
            console.error(error.message);
        }
    })




export default router;