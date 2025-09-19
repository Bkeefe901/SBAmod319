import express from 'express';
import User from '../models/userSchema.mjs';
import { users } from '../data/data.mjs';

const router = express.Router();


// Seeding data (uncomment-out and use route to seed your database)

// router.route("/seed")
//     .get(async (req, res) => {
//         try {
//             // Load DB
//             await User.create(users);

//             res.send("Data Sucessfully seeded");
//         } catch (error) {
//             console.error(error.message);
//         }
//     })






// Create
router.route("/")
    .post(async (req, res) => {
        try {
            // Perform Action
            let newUser = await User.create(req.body);
            // Return Result
            res.json(newUser);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }

    })
    // Read
    .get(async (req, res) => {
        try {
            // Perform Action
            let allUsers = await User.find({});
            // Return Result
            res.json(allUsers);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })




router.route("/:id")
// Read
// Get one user by id
    .get(async (req, res)=>{
        try {
            let user = await User.findById(req.params.id);

            res.json(user);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })

// Update
    .put(async (req, res) => {
        try {
            // Perform Action
            let updatedUser = await User.findByIdAndUpdate(
                req.params.id, 
                req.body, 
                { new: true, runValidators: true}
            );

            // Return Result
            res.json(updatedUser);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })
    // Delete
    .delete(async (req, res) => {
        try {
            // Perform Action
            let deletedUser = await User.findByIdAndDelete(req.params.id);
            // Return Result
            res.json(deletedUser);

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ msg: `❌ Error - ${err.message}` });
        }
    })





export default router;



