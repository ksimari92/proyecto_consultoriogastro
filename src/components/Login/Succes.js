import React from 'react'
import bienvenido from '../../assets/img/bienvenido-login.jpg'

const Succes = () => {
  return (
    <div>
        <h1 className='titulo-bienvenida'>¡Bienvenido a Consultorio de Gastroenterología!</h1>
        <img className='img-bienvenida' src={bienvenido} alt="foto bienvenida" />
    </div>
  )
}

export default Succes