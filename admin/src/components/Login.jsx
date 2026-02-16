import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendUrl } from '../App'
import toast from 'react-hot-toast'

const Login = ({setIsAdmin}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const onSubmitHandler = async e => {
    e.preventDefault()
    try {
        const response = await axios.post(backendUrl + '/api/admin/login', {email, password}, {withCredentials: true})

        if(response.data.success){
            toast.success('Вы вошли в систему')
            setIsAdmin(true)
            navigate('/add-doctor')
        }else{
            toast.error(response.data.message)
        }
    } catch (error) {
        toast.error(error.response.data.message)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-bold text-gray-900'>Авторизация</h2>
          <p className='mt-2 text-center text-xl text-gray-600'>VetClinic</p>
        </div>
        <form className='mt-8 space-y-6' onSubmit={onSubmitHandler}>
          <div>
            <input type='email' required className='relative block w-full border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black rounded-md' placeholder='email' value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <input type='password' required className='relative block w-full border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black rounded-md' placeholder='Пароль' value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div>
            <button type='submit' className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-colors cursor-pointer'>
              Войти
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
