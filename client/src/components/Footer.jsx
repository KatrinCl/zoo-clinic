import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <hr className='text-gray-300 my-5' />
      <div className='flex flex-col md:flex-row justify-between m-2 md:m-5'>
        <div className='flex flex-col gap-4 md:w-1/2'>
          <p>© Ветеринарная клиника VetClinic в Видном, 2026</p>
          <p className='text-gray-700 text-sm md:text-base'>Россия, Иваново, мкр. Видный, 1</p>
          <p className='text-gray-700 text-sm md:text-base'>Время работы: Пн-вс: 10:00—22:00</p>
          <p className='text-gray-500 text-sm md:text-base hidden md:block'>2012-2026 ©</p>
        </div>
        <div className='flex flex-col gap-2 md:w-1/2 md:text-right md:items-end text-gray-700'>
          <div className='flex gap-2'>
            <img className='w-4' src={assets.call1} alt='' />
            <p className='text-sm md:text-base'>+7 (901) 285-3563</p>
          </div>
          <p className='text-sm leading-7'>
            “Имеются противопоказания, необходима консультация специалиста. <br /> Цены, размещенные на сайте, не являются публичной офертой. С полным прейскурантом вы можете ознакомиться на стойках ресепшн или связавшись по телефону”
          </p>
          <p className='text-gray-500 text-sm md:text-base md:hidden'>2012-2026 ©</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
