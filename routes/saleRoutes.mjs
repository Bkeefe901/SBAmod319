import express from 'express';
import Sale from '../models/saleSchema.mjs';
import { sales } from '../data/data.mjs';

const router = express.Router();


// Seeding data (uncomment-out and use route to seed your database)

// router.route("/seed")
//     .get(async (req, res) => {
//         try {
//             // Load DB
//             await Sale.create(sales);

//             res.send("Data Sucessfully seeded");
//         } catch (error) {
//             console.error(error.message);
//         }
//     })

// Create
router.route("/")
    .post(async (req, res) => {
        try {
            let sale = await Sale.create(req.body);

            res.json(sale);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }

    })
    // Read
    // Get all sales data
    .get(async (req, res) => {
        try {
            let sales = await Sale.find({});

            res.json(sales);


        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })

// Read 
// Get index of all items sold
router.route("/itemsSold")
    .get(async (req, res)=>{
        try {
            const itemsSold = await Sale.find({}, { items: 1, _id: 0 });

            res.json(itemsSold);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}`});
            
        }
    })


// Read 
// Get one sale document
router.route("/:id")
    .get(async (req, res) => {
        try {
            let sale = await Sale.findById(req.params.id);

            res.json(sale);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }

    })
    // Update
    .put(async (req, res) => {
        try {
            let updatedSale = await Sale.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            );

            res.json(updatedSale);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })
    // Delete
    .delete(async (req, res) => {
        try {
            let deletedSale = await Sale.findByIdAndDelete(req.params.id);

            res.json(deletedSale);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })






export default router;