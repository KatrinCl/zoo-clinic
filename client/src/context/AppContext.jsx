import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const AppContext = createContext()

export const backendUrl = import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true

const AppContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedDoc, setSelectedDoc] = useState(null)

  const [doctors, setDoctors] = useState([])
  const [services, setServices] = useState([])

  const navigate = useNavigate()

  const openModal = doc => {
    setSelectedDoc(doc)
    setIsOpen(true)
  }

  const fetchDoctors = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/doctor/list-doctor')
      if (data.success) {
        setDoctors(data.doctors)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(data.message)
    }
  }

  const fetchServices = async () => {
    try {
      const { data } = await axios.get(backendUrl + '/api/service/list-service')
      if (data.success) {
        setServices(data.services)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(data.message)
    }
  }

  useEffect(() => {
    fetchDoctors()
    fetchServices()
  }, [])

  const value = { doctors, backendUrl, services, axios, navigate, isOpen, setIsOpen, selectedDoc, openModal }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider
