import { Schema, model } from "mongoose";




const collegeSchema = new Schema({
name: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  admissionDate: { type: Date, required: true },
  researchCount: { type: Number, required: true },
  description: { type: String, required: true },
  admissionProcess: [{ type: String }],
  events: [{ type: String }],
  sports: [{ type: String }],
})


export const College = model('College', collegeSchema)