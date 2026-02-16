import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col m-2 md:m-10 border border-gray-100 shadow-xl rounded-2xl'>
      <div className='m-4 md:m-10'>
        <h1 className='text-lg md:text-4xl'>
          Подробнее о компании <span className='font-bold text-blue-950'>VetClinic</span>
        </h1>

        <div className='flex flex-col gap-6 mt-5'>
          <p className='text-gray-700 leading-relaxed text-base'>VetClinic — современная ветеринарная клиника, которая объединяет опытных специалистов и передовые технологии. Мы работаем с 2012 года и за это время помогли более чем 10 000 домашних животных.</p>

          <p className='text-gray-700 leading-relaxed text-base space-y-4'>Наша миссия — обеспечить качественную ветеринарную помощь с заботой о каждом пациенте. В клинике работают дипломированные ветеринары, хирурги и терапевты, которые регулярно повышают квалификацию и применяют только доказанные методы лечения.</p>

          <p className='text-gray-700 leading-relaxed text-base space-y-4'>
            Мы располагаем современным диагностическим оборудованием: цифровым рентгеном, УЗИ-аппаратом экспертного класса, лабораторией для срочных анализов. Это позволяет ставить точные диагнозы и назначать эффективное лечение в кратчайшие сроки.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
