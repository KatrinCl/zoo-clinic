import React from 'react'

const DocModal = ({ doc, isOpen, onClose }) => {
  // Если модальное окно не открыто или doc не выбран — не рендерим
  if (!isOpen || !doc) return null

  // Обработчик клика по фону (вне окна)
  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div onClick={handleOverlayClick} className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
      <div className='bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] h-auto md:h-[60vh] flex shadow-2xl overflow-hidden relative'>
        <div className='flex flex-col md:flex-row m-2'>
          <img className='md:w-1/2 w-40 h-40' src={doc.image} alt='' />
          <div className='flex flex-col gap-6 mt-2 md:mt-14 px-4'>
            <p className='text-sm md:text-base text-gray-500'>{doc.skills}</p>
            <p className='text-lg md:text-2xl'>{doc.name}</p>
            <p className='text-gray-500 text-base'>Стаж {doc.experience} лет</p>
            <p className='text-sm md:text-base'>{doc.description}</p>
          </div>
          <button onClick={onClose} className='text-gray-500 hover:text-gray-700 text-3xl cursor-pointer absolute top-4 right-4'>
            ×
          </button>
        </div>
      </div>
    </div>
  )
}

export default DocModal
