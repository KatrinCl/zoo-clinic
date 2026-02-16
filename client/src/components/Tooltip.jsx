// components/Tooltip.jsx
import React from 'react'

const Tooltip = ({ children, text }) => {
  return (
    <div className='group relative inline-block'>
      {children}
      <div
        className='
        absolute bottom-full left-1/2 -translate-x-1/2
        mb-2 hidden group-hover:block
        px-3 py-2 bg-gray-500 text-white text-sm rounded-md
        whitespace-nowrap
      '>
        {text}
      </div>
    </div>
  )
}

export default Tooltip
