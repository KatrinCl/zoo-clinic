import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js';
import cookieParser from "cookie-parser";
import adminRoute from './routes/adminRoute.js';
import doctorRoute from './routes/doctorRoute.js';
import serviceRouter from './routes/serviceRoute.js';

const app = express()
const port = process.env.PORT || 4000;

connectDB()

app.use(express.json({limit: '5mb'}))
app.use(cookieParser());

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'https://zoo-clinic.vercel.app']

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use('/api/admin', adminRoute)
app.use('/api/doctor', doctorRoute)
app.use('/api/service', serviceRouter)


app.get('/', (req, res) => res.send('API Working'))

app.listen(port, () => console.log('Server started on PORT: ' + port))


