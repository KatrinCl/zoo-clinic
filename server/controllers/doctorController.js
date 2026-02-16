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

        // 3. Сжатие + конвертация
        const compressedBuffer = await sharp(req.file.buffer)
            .resize({ width: 1200, withoutEnlargement: true }) //ограничиваем размер, чтобы не грузить огромные изображения
            .webp({ quality: 85, effort: 4 }) //конвертируем в WebP с качеством 60%, effort 6 (сильно сжимает)
            .toBuffer() //получаем готовый файл для отправки в ImageKit

        const fileBase64 = compressedBuffer.toString('base64')

        // 4. Загрузка в ImageKit
        const uploadResponse = await imagekit.upload({
            file: fileBase64,
            fileName: `${Date.now()}.webp`,
            folder: '/doctors'
        })

        // 4. URL картинки
        const imageUrl = uploadResponse.url

        // 5. Сохранение врача
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