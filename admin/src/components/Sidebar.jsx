import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex'>
      <div className='flex flex-col gap-4  border-r border-gray-300'>
        <NavLink to='/add-doctor' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.add_icon} alt='' />
          <p>Добавить доктора</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />

        <NavLink to='/add-service' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.add_icon} alt='' />
          <p>Добавить услугу</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />

        <NavLink to='/list-doctor' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.order_icon} alt='' />
          <p>Список докторов</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />

        <NavLink to='/list-service' className='flex flex-row gap-4 p-6 items-center'>
          <img src={assets.order_icon} alt='' />
          <p>Список услуг</p>
        </NavLink>
        <hr className='m-0  h-[0.5px] border-0 bg-gray-300' />
      </div>
    </div>
  )
}

export default Sidebar
