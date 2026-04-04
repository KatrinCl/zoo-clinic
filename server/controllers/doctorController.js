import imagekit from "../config/imageKit.js"
import doctorModel from "../models/doctorModel.js"
import sharp from 'sharp'

export const addDoctor = async (req, res) => {
    try {
        if (!req.file) {
            return res.json({ success: false, message: "Необходимо загрузить изображение" })
        }

        const { name, speciality, experience, description, skills } = req.body

        if (!name || !speciality || !experience || !description || !skills) {
            return res.json({ success: false, message: "Заполните обязательные поля" })
        }

        const compressedBuffer = await sharp(req.file.buffer)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 85, effort: 4 })
            .toBuffer()

        const fileBase64 = compressedBuffer.toString('base64')

        const uploadResponse = await imagekit.upload({
            file: fileBase64,
            fileName: `${Date.now()}.webp`,
            folder: '/doctors'
        })

        const imageUrl = uploadResponse.url

        await doctorModel.create({
            name,
            speciality,
            experience,
            description,
            skills,
            image: imageUrl
        })

        res.json({ success: true, message: 'Врач добавлен' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export const listDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find()
        res.json({ success: true, doctors })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export const removeDoctor = async (req, res) => {
    try {
        await doctorModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Доктор удален" });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}