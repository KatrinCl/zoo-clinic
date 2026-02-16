import React from 'react'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import AddDoctor from './pages/AddDoctor'
import { useState } from 'react'
import Login from './components/Login'
import { useEffect } from 'react'
import axios from 'axios'
import Sidebar from './components/Sidebar'
import ListDoctors from './pages/ListDoctors'
import AddServices from './pages/AddServices'
import ListServices from './pages/ListServices'

export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const res = await axios.get(backendUrl + '/api/admin/check', { withCredentials: true })
        if (res.data.success) {
          setIsAdmin(true)
        } else {
          setIsAdmin(false)
        }
      } catch (error) {
        setIsAdmin(false)
      }
    }
    checkAdmin()
  }, [])

  return (
    <div>
      <Toaster />
      {!isAdmin ? (
        <Login setIsAdmin={setIsAdmin} />
      ) : (
        <>
          <Navbar setIsAdmin={setIsAdmin} />
          <hr className='m-0 h-[0.5px] border-0 bg-gray-300' />
          <div className='flex'>
            <Sidebar />
            <div className='flex-1 p-6'>
              <Routes>
                <Route path='/add-doctor' element={<AddDoctor isAdmin={isAdmin} />} />
                <Route path='/list-doctor' element={<ListDoctors isAdmin={isAdmin} />} />
                <Route path='/add-service' element={<AddServices isAdmin={isAdmin} />} />
                <Route path='/list-service' element={<ListServices isAdmin={isAdmin} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
