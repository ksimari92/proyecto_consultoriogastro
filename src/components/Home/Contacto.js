import React from 'react'

const Contacto = () => {
  return (
    <div className='container'>
        <h3>¡Contactanos!</h3>
        <form className='form-group row' action="">
            <input type="text" className='form-control col' placeholder='Nombre y Apellido' />
            <input type="email" className='form-control col' placeholder='Correo' />
            <textarea name="texto" className='form-control col-md-4' id="" cols="30" rows="10" placeholder='Ingrese su mensaje'></textarea>
            <input type="submit" value="Enviar" className='btn btn-primary' />
        </form>
    </div>
  )
}

export default Contacto