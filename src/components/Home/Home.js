import React from 'react'
import './Home.css'
import Header from './Header'
import Galeria from './Galeria'
import Contacto from './Contacto'
import Nosotros from './Nosotros'

const Home = () => {
  return (
    <div>
        <Header/>
        <Nosotros/>
        <Galeria/>
        <Contacto/>
    </div>
  )
}

export default Home