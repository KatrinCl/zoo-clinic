import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Doctors from './pages/Doctors'
import Services from './pages/Services'
import {Toaster} from 'react-hot-toast'
import ScrollToHash from './components/ScrollToHash'


const App = () => {
  return (
    <div className=''>
      <Toaster />
      <ScrollToHash />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
