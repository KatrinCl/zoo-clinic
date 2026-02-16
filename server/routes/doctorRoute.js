import express from 'express'
import { addDoctor, listDoctors, removeDoctor } from '../controllers/doctorController.js'
import { upload } from '../config/multer.js';
import authAdmin from '../middleware/authAdmin.js';

const doctorRoute = express.Router()

doctorRoute.post('/add-doctor', authAdmin, upload.single('image'), addDoctor)
doctorRoute.get('/list-doctor', listDoctors)
doctorRoute.post('/remove-doctor', authAdmin, removeDoctor)

export default doctorRoute;