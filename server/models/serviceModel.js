import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true }
  },
  { _id: false }
)

const profileSchema = new mongoose.Schema(
  {
    profile: { type: String, required: true },
    services: [serviceSchema]
  },
  { timestamps: true }
)

const serviceModel =
  mongoose.models.Service || mongoose.model("Service", profileSchema)

export default serviceModel
