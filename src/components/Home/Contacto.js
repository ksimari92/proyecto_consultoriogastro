import React from 'react'

const Contacto = () => {
  return (
    <div className='container-fluid container-form mt-5 '>
        <h2 className='subtitulo-home mb-3'>¡Contactanos!</h2>
        <form className='form-group row formulario' action="">
            <input type="text" className='form-control  mb-3' placeholder='Nombre y Apellido' />
            <input type="email" className='form-control mb-3' placeholder='Correo' />
            <textarea name="texto" className='form-control col-md-4 mb-3' id="" cols="30" rows="10" placeholder='Ingrese su mensaje'></textarea>
            <input type="submit" value="Enviar" className='btn btn-primary mb-5' />
        </form>
    </div>
  )
}

export default Contacto