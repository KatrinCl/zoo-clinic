import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const PopularServes = () => {
  const { navigate, services } = useContext(AppContext)

  // собираем все услуги в один массив
  const popularServices = [...services.flatMap(p => p.services)].sort(() => Math.random() - 0.5).slice(0, 10)

  return (
    <div className='border border-gray-100 shadow-xl rounded-2xl m-2 md:m-10'>
      <div className='m-10 flex flex-col gap-4'>
        <h1 className='text-lg md:text-4xl'>Популярные услуги</h1>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col md:grid md:grid-cols-5 gap-4 md:gap-6 items-center justify-center'>
            {popularServices.map((service, index) => (
              <div key={index} className='w-full flex justify-center md:justify-stretch'>
                <div className='service-card border border-gray-100 rounded-2xl p-7 flex flex-col justify-between w-full h-40 md:h-44 md:w-90 gap-4 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-blue-900 hover:text-white cursor-pointer'>
                  <h1 className='text-base'>{service.name}</h1>
                  <p className='price text-blue-900 text-base'>{service.price} руб.</p>
                </div>
              </div>
            ))}
          </div>
          <div className='rounded-xl px-4 py-2 md:w-50 bg-blue-900  text-white cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 items-center justify-center flex'>
            <p
              onClick={() => {
                scrollTo(0, 0)
                navigate('/services')
              }}
              className='text-base'>
              Показать все услуги
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularServes
