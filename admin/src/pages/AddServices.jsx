import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
import toast from 'react-hot-toast'

const AddServices = ({ isAdmin }) => {
  const [profile, setProfile] = useState('')
  const [services, setServices] = useState([{ name: '', price: '' }])

  const addService = () => setServices([...services, { name: '', price: '' }])
  const removeService = index => setServices(services.filter((_, i) => i !== index))
  const handleServiceChange = (index, field, value) => {
    const newServices = [...services]
    newServices[index][field] = value
    setServices(newServices)
  }

  const onSubmitHandler = async e => {
    e.preventDefault()
    if (!isAdmin) {
      return null
    }

    try {
      const { data } = await axios.post(backendUrl + '/api/service/add-service', { profile, services }, { withCredentials: true })

      if (data.success) {
        toast.success(data.message)
        setProfile('')
        setServices([{ name: '', price: '' }])
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col gap-6 m-6'>
      <div className='flex flex-col gap-2'>
        <label className='font-semibold'>Название профиля</label>
        <input type='text' required value={profile} onChange={e => setProfile(e.target.value)} className='border border-gray-300 p-2 rounded w-80' />
      </div>

      <div className='overflow-x-auto border rounded'>
        <table className='w-full text-left'>
          <thead className='bg-gray-100'>
            <tr>
              <th className='p-2'>Название услуги</th>
              <th className='p-2'>Цена</th>
              <th className='p-2'>Действие</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr key={index} className='border-b'>
                <td className='p-2'>
                  <input type='text' placeholder='Название услуги' value={service.name} onChange={e => handleServiceChange(index, 'name', e.target.value)} required className='border border-gray-300 p-1 rounded w-full' />
                </td>
                <td className='p-2'>
                  <input type='text' placeholder='Цена' value={service.price} onChange={e => handleServiceChange(index, 'price', e.target.value)} required className='border border-gray-300 p-1 rounded w-full' />
                </td>
                <td className='p-2'>
                  {services.length > 1 && (
                    <button type='button' onClick={() => removeService(index)} className='px-2 py-1 bg-red-500 text-white rounded'>
                      Удалить
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button type='button' onClick={addService} className='px-4 py-2 bg-blue-500 text-white rounded w-60 mt-2 cursor-pointer'>
        Добавить услугу
      </button>

      <button type='submit' className='px-4 py-2 bg-green-600 text-white rounded w-60 mt-2 cursor-pointer'>
        Сохранить профиль
      </button>
    </form>
  )
}

export default AddServices
