import React from 'react'
import Banner from '../components/Banner'
import PopularServes from '../components/PopularServes'
import Actions from '../components/Actions'
import Contacts from '../components/Contacts'
import Docs from '../components/Docs'
import About from '../components/About'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <div>
      <Banner />
      <section id='services'>
        <PopularServes />
      </section>
      <section id='actions'>
        <Actions />
      </section>
      <About />
      <section id='photos'>
        <Gallery />
      </section>
      <section id='docs'>
        <Docs />
      </section>
      <section id='contacts'>
        <Contacts />
      </section>
    </div>
  )
}

export default Home
