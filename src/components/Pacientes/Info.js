import React, { useState } from 'react'
import { useStore } from 'zustand';
import { usePacients } from '../../store';

const Info = () => {
  const {pacients, setPacients} = usePacients();  
  // const [userPacients, setUserPacients] = useState(pacients)
  const [result, setResult] = useState([]);
  


  console.log(pacients)

  function handleEliminar(index) {
    const nuevosElementos = pacients.filter((elemento, i) => i !== index);
    console.log(nuevosElementos)
    setPacients(nuevosElementos);
  }



  return (
    <div>
      <div className="buscador d-flex mt-5">
        <h5>Buscar paciente por nombre o apellido :</h5>
        <input className='form-control' type="text" onChange={(e) => { setResult(e.target.value) }} />
      </div>
      <div className='mt-5'>
        <ul>
          {
            pacients.filter((paciente) => {

              if (paciente.name.includes(result)) {
                return paciente
              }
              return false
            }).map(
              (paciente, index) => {
                return (
                  <li key={index}>
                    <div className="card" >
                      <h4>Nombre: {paciente.name}  </h4>
                      <p>Email: {paciente.email}  </p>
                      <p>Telefono: {paciente.phone} </p>
                      <p>Direccion: {`${paciente.address.street} ${paciente.address.suite}`} </p>
                      <div className='cont-button'>
                        <button>Editar</button>
                        <button onClick={() => { handleEliminar(index) }}>Eliminar</button>
                      </div>

                    </div>
                  </li>);
              })
          }
        </ul>
      </div>

    </div>
  )
}

export default Info