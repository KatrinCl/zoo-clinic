import express from 'express'
import authAdmin from '../middleware/authAdmin.js'
import { AddService, addServiceToProfile, listServices, removeService, removeServiceFromProfile, updateServicePrice } from '../controllers/serviceController.js'

const serviceRouter = express.Router()

serviceRouter.post('/add-service', authAdmin, AddService)
serviceRouter.get('/list-service', listServices)
serviceRouter.post('/remove-service', authAdmin, removeService)
serviceRouter.post('/update-price', authAdmin, updateServicePrice)
serviceRouter.post('/add-to-profile', authAdmin, addServiceToProfile)
serviceRouter.post('/remove-from-profile', authAdmin, removeServiceFromProfile)

export default serviceRouter;