import React from 'react'
import foto1 from '../../assets/img/vet1.jpg'
import foto2 from '../../assets/img/vet2.jpg'
import foto3 from '../../assets/img/vet3.jpg'



const Galeria = () => {
  return (
    <div className='galeria'>
        <img className='img-fluid' src={foto1} alt="vet1" />
        <img className='img-fluid' src={foto2} alt="vet2" />
        <img className='img-fluid' src={foto3} alt="vet3" />
    </div>
  )
}

export default Galeria