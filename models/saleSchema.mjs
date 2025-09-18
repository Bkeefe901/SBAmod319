import mongoose from "mongoose";
import { shirts, users } from '../data/data.mjs';
import User from './userSchema.mjs';

const Schema = mongoose.Schema;

const saleSchema = new Schema({
    date: {type: Date},
    items: [{ type: String }], // [{type: String, required: true}],
    total: {type: Number},
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async function(v){
                const user = await mongoose.model('User').findById(v);
                return user;
            },
            message: 'User does not exist.'
        }
    
    }
});



export default mongoose.model('Sale', saleSchema);




// const BookSchema = new Schema({
//   title: String,
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: 'Author',
//     required: true,
//     validate: {
//       validator: async function(v) {
//         // 'this' refers to the document being validated
//         // Check if an Author with this ID exists
//         const author = await mongoose.model('Author').findById(v);
//         return !!author; // Returns true if author exists, false otherwise
//       },
//       message: 'Author does not exist.'
//     }
//   },
//   // ... other book fields
// });


// Explanation:
// ref: 'Author': This establishes a link between the author field in BookSchema and the Author model.
// required: true: This built-in validator ensures that a value is provided for the author field.
// validate: This is a custom validator.
// validator: async function(v): This function receives the value (v, which is the ObjectId) of the author field. It performs an asynchronous check using mongoose.model('Author').findById(v) to see if an Author document with that _id exists.
// return !!author: It returns true if an author is found (meaning author is not null), and false otherwise.
// message: 'Author does not exist.': This provides a custom error message if the validation fails.
// When you attempt to save a Book document, Mongoose will now not only check if the author field is an ObjectId but also if that ObjectId corresponds to an existing Author document.