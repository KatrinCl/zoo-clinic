import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'
import toast from 'react-hot-toast'

const ListDoctors = ({ isAdmin }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/doctor/list-doctor', { withCredentials: true })

      if (response.data.success) {
        setList(response.data.doctors)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeDoctor = async id => {
    if (!isAdmin) {
      return null
    }

    try {
      const response = await axios.post(backendUrl + '/api/doctor/remove-doctor', { id }, { withCredentials: true })
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [isAdmin])

  return (
    <div>
      <p className='text-base'>Список докторов</p>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='grid grid-cols-[0.6fr_0.5fr_0.5fr_1fr_1fr_0.3fr_0.3fr] items-center border bg-gray-100 text-sm p-2'>
          <b>Изображение</b>
          <b className='ml-2'>Имя</b>
          <b>Специальность</b>
          <b>Навыки</b>
          <b>Описание</b>
          <b>Опыт</b>
          <b>Действие</b>
        </div>

        {list.map(doc => (
          <div key={doc._id} className='grid grid-cols-[0.6fr_0.5fr_0.5fr_1fr_1fr_0.3fr_0.3fr] items-center'>
            <img src={doc.image} alt='' />
            <p className='ml-2'>{doc.name}</p>
            <p>{doc.speciality}</p>
            <p>{doc.skills}</p>
            <p>{doc.description}</p>
            <p>{doc.experience} лет</p>
            <p onClick={() => removeDoctor(doc._id)} className='flex items-center justify-center text-red-500 cursor-pointer'>
              X
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListDoctors
