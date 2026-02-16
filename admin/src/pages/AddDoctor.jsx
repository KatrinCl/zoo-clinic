import React from 'react'
import { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import toast from 'react-hot-toast'

const AddDoctor = ({ isAdmin }) => {
  const [image, setImage] = useState(false)
  const [name, setName] = useState('')
  const [speciality, setSpeciality] = useState('')
  const [experience, setExperience] = useState('')
  const [description, setDescription] = useState('')
  const [skills, setSkills] = useState('')

  const onSubmitHandler = async e => {
    e.preventDefault()
    if (!isAdmin) {
      return null
    }

    try {
      const formData = new FormData()

      formData.append('name', name)
      formData.append('speciality', speciality)
      formData.append('experience', experience)
      formData.append('description', description)
      formData.append('skills', skills)

      image && formData.append('image', image)

      const response = await axios.post(backendUrl + '/api/doctor/add-doctor', formData, { withCredentials: true, headers: { 'Content-Type': 'multipart/form-data' } })

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setExperience('')
        setSpeciality('')
        setDescription('')
        setSkills('')
        setImage(false)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col gap-6'>
      <div className='flex flex-col gap-2'>
        <p className='text-base'>Загрузить изображение</p>
        <label htmlFor='image'>
          <img src={!image ? assets.upload_area : URL.createObjectURL(image)} alt='' className='w-35 h-35' />
          <input type='file' id='image' onChange={e => setImage(e.target.files[0])} hidden />
        </label>
      </div>
      <div className='flex flex-col gap-2'>
        <p>Полное имя</p>
        <input type='text' required onChange={e => setName(e.target.value)} value={name} className='border border-gray-300 w-80 p-2 rounded' />
      </div>

      <div className='flex flex-col gap-2'>
        <p>Специальность</p>
        <textarea type='text' rows={2} required onChange={e => setSpeciality(e.target.value)} value={speciality} className='border border-gray-300 w-80 p-2 rounded' />
      </div>

      <div className='flex flex-col gap-2'>
        <p>Навыки</p>
        <textarea type='text' rows={5} required onChange={e => setSkills(e.target.value)} value={skills} className='border border-gray-300 w-80 p-2 rounded' />
      </div>

      <div className='flex flex-col gap-2'>
        <p>Описание</p>
        <textarea type='text' rows={5} required onChange={e => setDescription(e.target.value)} value={description} className='border border-gray-300 w-80 p-2 rounded' />
      </div>

      <div className='flex flex-col gap-2'>
        <p>Опыт (полных лет)</p>
        <input type='text' required onChange={e => setExperience(e.target.value)} value={experience} className='border border-gray-300 w-80 p-2 rounded' />
      </div>

      <button className='border w-40 rounded-full p-2 cursor-pointer hover:border-gray-500' type='submit'>
        Добавить
      </button>
    </form>
  )
}

export default AddDoctor
