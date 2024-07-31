import mongoose, { Schema } from "mongoose";



const admissionSchema = new Schema({
    college: { type: mongoose.Schema.Types.ObjectId, ref: 'College', required: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    dob: { type: Date, required: true },
    image: { type: String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
})



export const Admission = mongoose.model('Admission', admissionSchema)