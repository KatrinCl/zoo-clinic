import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import adminModel from '../models/adminModel.js'

export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body

        const admin = await adminModel.findOne({ email }).select('+password')
        if (!admin) {
            return res.json({ success: false, message: 'Неверные данные' })
        }

        const isMatch = await bcrypt.compare(password, admin.password)
        if (!isMatch) {
            return res.json({ success: false, message: 'Неверные данные' })
        }

        const token = jwt.sign(
            { id: admin._id, role: 'admin' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.cookie('adminToken', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 60 * 60 * 1000
        })

        res.json({ success: true, message: 'Вы вошли в админку' })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: 'Ошибка сервера' })
    }
}

export const adminLogout = async (req, res) => {
    try {
        res.clearCookie('adminToken', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        });
        return res.json({ success: true, message: 'Вы вышли из админки' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};


export const checkAdmin = async (req, res) => {
    const token = req.cookies.adminToken;
    if (!token) {
        return res.json({ success: false })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role === 'admin') {
            return res.json({ success: true })
        } else {
            return res.json({ success: false })
        }
    } catch (error) {
        return res.json({ success: false })
    }
}
