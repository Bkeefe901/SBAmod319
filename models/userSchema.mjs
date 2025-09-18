import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }

});


// Username Index
userSchema.index({ userName: 1 });



export default mongoose.model('User', userSchema);