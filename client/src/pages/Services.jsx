import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Services = () => {
  const { services } = useContext(AppContext)

  return (
    <div className='min-h-screen m-2 md:m-10 border border-gray-100 shadow-2xl rounded-2xl'>
      <div className='m-10'>
        <h1 className='text-lg md:text-4xl mb-4 md:mb-8'>Все услуги</h1>

        <div className='flex flex-col gap-8'>
          {services.map(profile => (
            <div key={profile._id}>
              {/* 🔹 профиль */}
              <h2 className='text-lg md:text-2xl font-semibold mb-4'>{profile.profile}</h2>

              {/* 🔹 услуги внутри профиля */}
              <div className='flex flex-col gap-2'>
                {profile.services.map((service, index) => (
                  <div key={index} className='flex flex-col gap-2 md:flex-row justify-between border border-gray-300 p-3 rounded-xl'>
                    <span className='text-sm md:text-base'>{service.name}</span>
                    <span className='text-sm md:text-base text-gray-500'>{service.price} ₽</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
