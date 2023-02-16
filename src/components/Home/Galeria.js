import React from 'react'
import foto1 from '../../assets/img/vet1.jpg'
import foto2 from '../../assets/img/vet2.jpg'
import foto3 from '../../assets/img/vet3.jpg'



const Galeria = () => {
  return (
    <div className='mt-5'>
      <h2 className='subtitulo-home'>Somos veterinarios</h2>
      <div className='galeria mt-3'>
        <img className='rounded' src={foto1} alt="vet1" />
        <img className='rounded' src={foto2} alt="vet2" />
        <img className='rounded' src={foto3} alt="vet3" />
      </div>
    </div>
  )
}

export default Galeria