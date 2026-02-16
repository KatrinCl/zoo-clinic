import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../assets/assets'

const Gallery = () => {
  const slider = useRef()
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [canScrollLeft, setCanScrollLeft] = useState(false) // Можно ли прокручивать влево
  const [canScrollRight, setCanScrollRight] = useState(true) // Можно ли прокручивать вправо

  // Прокрутка влево
  const scrollLeft = () => {
    if (slider.current) {
      slider.current.scrollBy({
        left: -600, // Расстояние прокрутки
        behavior: 'smooth',
      })
    }
  }

  // Прокрутка вправо
  const scrollRight = () => {
    if (slider.current) {
      slider.current.scrollBy({
        left: 600,
        behavior: 'smooth',
      })
    }
  }

  // Открытие фото
  const openImage = src => {
    setCurrentImage(src)
    setIsOpen(true)
  }

  // Закрытие фото
  const closeImage = () => {
    setIsOpen(false)
    setCurrentImage('')
  }

  // Эффект для отслеживания прокрутки
  useEffect(() => {
    const container = slider.current
    if (!container) return

    const checkScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth)
    }

    // Проверяем при загрузке и при прокрутке
    checkScroll()
    container.addEventListener('scroll', checkScroll)

    return () => container.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <div className='m-2 md:m-10'>
      <div className='mt-10 flex flex-col md:gap-6'>
        <div className='flex justify-between'>
          <h1 className='text-lg md:text-4xl ml-4 md:ml-0'>Фотогалерея</h1>
          <div className='flex gap-6'>
            <div onClick={canScrollLeft ? scrollLeft : undefined} className={`border border-gray-100 shadow-2xl rounded-full items-center justify-center flex p-4 cursor-${canScrollLeft ? 'pointer' : 'default'} transition-all duration-300 ${canScrollLeft ? 'hover:scale-110 hover:bg-gray-300 opacity-100' : 'opacity-50 cursor-not-allowed'}`}>
              <img className='w-4 h-4' src={assets.arrow_left} alt='' />
            </div>
            <div onClick={canScrollRight ? scrollRight : undefined} className={`border border-gray-100 shadow-2xl rounded-full items-center justify-center flex p-4 cursor-${canScrollRight ? 'pointer' : 'default'} transition-all duration-300 ${canScrollRight ? 'hover:scale-110 hover:bg-gray-300 opacity-100' : 'opacity-50 cursor-not-allowed'}`}>
              <img className='w-4 h-4' src={assets.arrow_right} alt='' />
            </div>
          </div>
        </div>

        <div ref={slider} className='flex gap-0 overflow-x-auto'>
          {[assets.i2, assets.i1, assets.i3, assets.i4, assets.i5, assets.i6].map((src, index) => (
            <img onClick={() => openImage(src)} key={index} className='object-cover w-80 h-70 border border-gray-100 rounded-2xl cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out m-5' src={src} alt='' />
          ))}
        </div>
      </div>

      {/* Модальное окно для фото */}
      {isOpen && (
        <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4' onClick={closeImage}>
          <div
            className='relative max-w-full max-h-[90vh] bg-white rounded-lg shadow-2xl'
            onClick={e => e.stopPropagation()} // Не закрываем при клике внутри
          >
            <button className='absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-300 text-white flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer' onClick={closeImage}>
              ×
            </button>
            <img src={currentImage} alt='Полноразмерное фото' className='max-w-full max-h-[85vh] rounded-lg' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
