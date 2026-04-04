import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='flex flex-col m-2 md:m-10'>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center'>
          <Link to='/' className='text-2xl cursor-pointer'>
            VetClinic
          </Link>
            <img className='w-6 h-6' src={assets.logo} alt="" />
          </div>
        <p className='text-gray-700 hidden md:block'>Россия, Иваново, мкр. Видный, 1</p>

        <button onClick={() => setOpen(!open)} className='md:hidden text-3xl text-blue-900 cursor-pointer' aria-label='Открыть меню'>
          ☰
        </button>
      </div>
      <hr className='text-gray-300 my-5' />
      <div className='hidden md:flex justify-between'>
        <div className='flex gap-4 text-blue-900'>
          <a href='/#services'>Услуги</a>
          <NavLink to='/services'>Прайс</NavLink>
          <NavLink to='/#docs'>Специалисты</NavLink>
          <a href='/#photos'>Фото</a>
          <a href='/#actions'>Акции</a>
          <a href='/#contacts'>Контакты</a>
        </div>
        <div className='flex gap-2 rounded-xl px-4 py-2 bg-blue-900  text-white'>
          <img className='w-4' src={assets.call} alt='' />
          <p className='text-sm md:text-base'>+7 (901) 285-3563</p>
        </div>
      </div>

      {/* Мобильное меню */}
      {open && (
        <div className='md:hidden mt-6 border rounded-xl p-4 flex flex-col gap-4 bg-white shadow-xl'>
          <NavLink to='/#services' onClick={() => setOpen(false)}>
            Услуги
          </NavLink>
          <NavLink to='/services' onClick={() => setOpen(false)}>
            Прайс
          </NavLink>
          <NavLink to='/#docs' onClick={() => setOpen(false)}>
            Специалисты
          </NavLink>
          <NavLink to='/#photos' onClick={() => setOpen(false)}>
            Фото
          </NavLink>
          <NavLink to='/#actions' onClick={() => setOpen(false)}>
            Акции
          </NavLink>
          <NavLink to='/#contacts' onClick={() => setOpen(false)}>
            Контакты
          </NavLink>

          <div className='flex gap-2 items-center justify-center mt-4 bg-blue-900 text-white rounded-xl px-4 py-2'>
            <img className='w-4' src={assets.call} alt='Телефон' />
            <p className='text-sm'>+7 (901) 285-3563</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
