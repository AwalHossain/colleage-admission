import mongoose, { Schema } from "mongoose";




const reviewSchema = new Schema({
    collegeId: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
    author: { type: String, required: true },
    rating: { type: Number, required: true },
    content: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
})


export const Review = mongoose.model('Review', reviewSchema)