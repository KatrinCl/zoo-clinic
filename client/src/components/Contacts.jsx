import React from 'react'
import { assets } from '../assets/assets'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

const Contacts = () => {
  // Координаты центра Иваново
  const mapState = {
    center: [56.970775, 41.023687],
    zoom: 14,
  }

  // Координаты нужного дома (пример)
  const houseCoordinates = [56.970775, 41.023687]

  return (
    <div className='flex flex-col md:flex-row gap-2 md:gap-6 mx-2 my-10 md:m-10'>

      <div className='flex flex-col gap-2 border border-gray-100 shadow-xl rounded-2xl p-10 md:w-1/2  md:h-80'>
        <h1 className='font-bold text-lg md:text-2xl'>Остались вопросы?</h1>
        <p>Вы можете воспользоваться любым из указанных способов связи</p>
        <div className='flex flex-col gap-2 mt-4'>
          <p className='text-gray-700'>Контактный номер</p>
          <div className='flex gap-2 border border-gray-600 rounded-2xl p-2 md:w-50 items-center justify-center'>
            <img className='w-4' src={assets.call1} alt='' />
            <p className='text-sm md:text-base'>+7 (901) 285-3563</p>
          </div>
        </div>
      </div>

      <div className='flex border border-gray-100 shadow-xl rounded-2xl md:w-1/2 md:h-80'>
        <YMaps>
          <Map defaultState={mapState} width='100%' height='320px'>
            <Placemark
              geometry={houseCoordinates}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/location.svg',
                iconImageSize: [30, 30],
                iconImageOffset: [-15, -15],
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  )
}

export default Contacts
