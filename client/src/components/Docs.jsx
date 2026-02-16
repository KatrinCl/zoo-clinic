import React from 'react'
import { assets, dummyDataDoctors } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import DocModal from './DocModal'
import Tooltip from './Tooltip'

const Docs = () => {
  const { doctors, navigate, isOpen, selectedDoc, openModal, setIsOpen } = useContext(AppContext)

  return (
    <div className='flex flex-col gap-4 md:gap-10 m-2 md:m-10'>
      <h1 className='text-lg md:text-4xl'>Специалисты</h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-8'>
        {doctors.slice(0, 4).map(doc => (
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

      <div
        onClick={() => {
          scrollTo(0, 0)
          navigate('/doctors')
        }}
        className='rounded-xl px-4 py-2 w-60 bg-blue-900  text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 flex gap-4 mx-auto items-center'>
        <p className='text-sm md:text-base'>Больше специалистов</p>
        <img className='w-4 h-4' src={assets.arrow_icon} alt='' />
      </div>
      <DocModal doc={selectedDoc} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default Docs
