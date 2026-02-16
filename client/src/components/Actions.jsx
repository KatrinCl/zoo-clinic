import React from 'react'
import { assets } from '../assets/assets'

const Actions = () => {
  return (
    <div className='mt-10 md:m-10 flex flex-col'>
      <h1 className='text-lg md:text-4xl'>Акции и скидки</h1>
      <div className='flex flex-col md:flex-row mt-2 md:mt-7 gap-2 md:gap-6 items-stretch justify-center'>

        <div className='relative border border-gray-100 shadow-xl rounded-2xl flex-1 overflow-hidden'>
          <img className='w-full h-full object-cover' src={assets.usy} alt='' />
          <div className='absolute inset-0 bg-black opacity-30'></div>
          <div className='absolute top-0 left-2 right-0 p-6 text-white text-3xl font-extralight'>
            <h2>УЗИ животному</h2>
          </div>
        </div>
        <div className='relative border border-gray-100 shadow-xl rounded-2xl flex-1 overflow-hidden'>
          <img className='w-full h-full object-cover' src={assets.surgery} alt='' />
          <div className='absolute inset-0 bg-black opacity-30'></div>
          <div className='absolute top-0 left-0 right-0 p-6 text-white text-3xl font-extralight text-center'>
            <h2>Хирургические процедуры</h2>
          </div>
        </div>
        <div className='relative border border-gray-100 shadow-xl rounded-2xl flex-1 overflow-hidden'>
          <img className='w-full h-full object-cover' src={assets.cast} alt='' />
          <div className='absolute inset-0 bg-black opacity-30'></div>
          <div className='absolute top-0 left-0 right-0 p-6 text-white text-3xl font-extralight text-center'>
            <h2>Кастрация и стерилизация</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Actions
