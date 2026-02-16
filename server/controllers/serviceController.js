import serviceModel from "../models/serviceModel.js"


export const AddService = async (req, res) => {
    const { profile, services } = req.body
    try {
        if (!profile || !services?.length) {
            return res.json({ success: false, message: 'Заполните профиль и хотя бы одну услугу' })
        }

        await serviceModel.create({
            profile, services
        })

        return res.json({ success: true, message: 'Профиль с услугами добавлен' })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export const updateServicePrice = async (req, res) => {
  try {
    const { profileId, serviceIndex, price } = req.body

    if (!profileId || serviceIndex === undefined || !price) {
      return res.json({ success: false, message: 'Некорректные данные' })
    }

    const profile = await serviceModel.findById(profileId)

    if (!profile) {
      return res.json({ success: false, message: 'Профиль не найден' })
    }

    profile.services[serviceIndex].price = price
    await profile.save()

    res.json({ success: true, message: 'Цена обновлена' })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export const listServices = async (req, res) => {
    try {
        const services = await serviceModel.find()

        res.json({ success: true, services })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export const removeService = async (req, res) => {
    try {
        await serviceModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Услуга удалена" });

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })

    }
}

export const addServiceToProfile = async (req, res) => {
  try {
    const { profileId, name, price } = req.body

    if (!profileId || !name || !price) {
      return res.json({ success: false, message: "Заполните все поля" })
    }

    const profile = await serviceModel.findById(profileId)

    if (!profile) {
      return res.json({ success: false, message: "Профиль не найден" })
    }

    profile.services.push({ name, price })
    await profile.save()

    res.json({ success: true, message: "Услуга добавлена" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export const removeServiceFromProfile = async (req, res) => {
  try {
    const { profileId, serviceIndex } = req.body

    const profile = await serviceModel.findById(profileId)
    if (!profile) {
      return res.json({ success: false, message: "Профиль не найден" })
    }

    profile.services.splice(serviceIndex, 1)
    await profile.save()

    res.json({ success: true, message: "Услуга удалена" })
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}
