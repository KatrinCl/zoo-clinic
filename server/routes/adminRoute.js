import express from 'express'
import authAdmin from '../middleware/authAdmin.js'
import { adminLogin, adminLogout, checkAdmin } from '../controllers/adminController.js'
import { adminLoginLimiter } from '../middleware/adminLoginLimiter.js'

const adminRoute = express.Router()

adminRoute.post('/login', adminLoginLimiter, adminLogin)
adminRoute.get('/logout', authAdmin, adminLogout)
adminRoute.get('/check', checkAdmin)

export default adminRoute;