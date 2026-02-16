import mongoose from 'mongoose'

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    speciality: { type: String, required: true },
    experience: { type: Number, required: true },
    description: { type: String, required: true },
    skills: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true }
)

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)

export default doctorModel;