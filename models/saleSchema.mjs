import mongoose from "mongoose";


const saleSchema = new mongoose.Schema({
    date: {type: Date, required: true},
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Shirts' }], // [{type: String, required: true}],
    total: {type: Number, required: true},
    userID: {type: Number, required: true}
});



export default mongoose.model('Sale', saleSchema);