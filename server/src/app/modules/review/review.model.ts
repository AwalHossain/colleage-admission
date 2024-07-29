import mongoose, { Schema } from "mongoose";




const reviewSchema = new Schema({
    college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
});


export const Review = mongoose.model('Review', reviewSchema)