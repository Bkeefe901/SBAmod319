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


    }, 
    total: { type: Number }, // I would like to validate this to be equal to the sum of items in the items array *****************************************
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        validate: {
            validator: async function (v) { // Checks that user Id matches user's _id from users collection
                const isUser = await mongoose.model('User').findById(v);
                return isUser;
            },
            message: 'User does not exist.'
        }

    }
});


// Items index for total of all items sold

saleSchema.index({ items: 1 })



export default mongoose.model('Sale', saleSchema);



