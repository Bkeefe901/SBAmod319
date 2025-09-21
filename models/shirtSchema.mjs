import mongoose from "mongoose";


const shirtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    sizes: {
        type: [String],
        enum: {values: [
            'xxl',
            'xl', 
            'l', 
            'm', 
            's', 
            'xs'
        ], 
        message: 'Size not found' },
        required: true
    },
    colors: {
        type: [String],
        enum: { values: [
            'black',
            'white',
            'green',
            'red',
            'blue',
            'grey',
            'purple',
            'yellow'
        ],
        message: 'Color not available',
        required: true
        }
    },
    material: String,
    price: {type: Number, required: true}
});






export default mongoose.model('Shirt', shirtSchema);