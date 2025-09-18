import express from 'express';
import { sales } from '../data/data.mjs';
import Sale from '../models/saleSchema.mjs';

const router = express.Router();

router.route("/seed")
    .get(async (req, res) => {
        try {
            // Load DB
            await Sale.create(sales);

            res.send("Data Sucessfully seeded");
        } catch (error) {
            console.error(error.message);
        }
    })


router.route("/")
    .post(async (req, res)=>{
        try{
            let sale = await Sale.create(req.body);

            res.json(sale);
        } catch(err){
            console.error(err.message);
            res.status(500).json({msg: `❌ Error - ${err.message}`});
        }
        
    })






export default router;