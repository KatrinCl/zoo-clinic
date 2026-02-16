import React, { useState } from 'react'
import { assets } from '../assets/assets'
import DocModal from '../components/DocModal'
import Tooltip from '../components/Tooltip'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { doctors, isOpen, selectedDoc, openModal, setIsOpen } = useContext(AppContext)

  return (
    <div className='flex flex-col m-2 md:m-10 min-h-screen'>
      <h1 className='text-lg md:text-4xl'>Специалисты</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-8 mt-4 md:mt-10'>
        {doctors.map(doc => (
          <div key={doc._id} className='relative border border-gray-100 shadow-xl rounded-2xl cursor-pointer'>
            <img className='w-100 h-90 object-cover' src={doc.image} alt='' />
            <div className='flex flex-col gap-2 p-4'>
              <p className='text-base md:text-lg'>{doc.name}</p>
              <div className='flex justify-between'>
                <p className='text-sm md:text-base text-gray-500'>{doc.speciality}</p>
                <Tooltip text='Подробнее'>
                  <div className='w-8 h-8 flex items-center justify-center'>
                    <img onClick={() => openModal(doc)} className='cursor-pointer w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ease-in-out hover:scale-110' src={assets.help_icon} alt='' />
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
        ))}
      </div>

      <DocModal doc={selectedDoc} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default Doctors
