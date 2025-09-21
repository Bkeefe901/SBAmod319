import express from 'express';
import Shirt from '../models/shirtSchema.mjs';
import { shirts } from '../data/data.mjs';


const router = express.Router();

// Seeding data (uncomment-out and use route to seed your database)

// router.route("/seed")
//     .get(async (req, res) => {
//         try {
//             // Load DB
//             await Shirt.create(shirts);

//             res.send("Data Sucessfully seeded");
//         } catch (error) {
//             console.error(error.message);
//         }
//     })



// Create
router.route("/")
    .post(async (req, res) => {
        try {
            let shirt = await Shirt.create(req.body);

            res.json(shirt);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })
    // Read
    // Get all shirts data
    .get(async (req, res) => {
        try {
            let shirts = await Shirt.find({});

            res.json(shirts)

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })


// Read
// Get one shirt document
router.route("/:id")
    .get(async (req, res) => {
        try {
            let shirt = await Shirt.findById(req.params.id);

            res.json(shirt);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })
    // Update
    .put(async (req, res) => {
        try {
            let updatedShirt = await Shirt.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true, runValidators: true }
            )
            res.json(updatedShirt);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })
    // Delete
    .delete(async (req, res) => {
        try {
            let deletedShirt = await Shirt.findByIdAndDelete(req.params.id);

            res.json(deletedShirt);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });

        }
    })


export default router;