import axios from 'axios'
import React from 'react'
import { backendUrl } from '../App'
import toast from 'react-hot-toast'

const Navbar = ({ setIsAdmin }) => {
  const handleLogout = async () => {
    try {
      await axios.get(backendUrl + '/api/admin/logout', { withCredentials: true })
      setIsAdmin(false)
      toast.success('Вы вышли из системы')
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <div className='flex justify-between m-10'>
      <p className='text-2xl'>VetClinic</p>
      <button onClick={() => handleLogout()} className='border border-blue-900 rounded-full px-5 py-2 cursor-pointer transition-all hover:scale-110 duration-300 text-blue-900'>
        Выйти
      </button>
    </div>
  )
}

export default Navbar
