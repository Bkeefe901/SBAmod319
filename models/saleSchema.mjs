import mongoose from "mongoose";


const Schema = mongoose.Schema;

const saleSchema = new Schema({
    date: { type: Date, default: Date.now },
    items: {
        type: [mongoose.Schema.Types.ObjectId], // type is strings that must match the _id's from the shirts data in the db
        required: true,
        validate: [
            {
                validator: function (arr) { // Checks to make sure there is atleast one item in the items array.
                    return arr.length > 0;
                },
                message: "At least one item required"
            },
            {
                validator: async function (arr) { // Checks that the number of items in the array that match the _id's from the shirts collection is equal to the size of the array
                    const isShirts = await mongoose.model('Shirt').countDocuments({ _id: { $in: arr } });

                    return isShirts == arr.length;
                },
                message: "One or more shirt id's are invalid"
            }
        ]


    }, // [{type: String, required: true}],
    total: { type: Number }, // I would like to validate this to be equal to the sum of items in the items array *****************************************
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async function (v) {
                const isUser = await mongoose.model('User').findById(v);
                return isUser;
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