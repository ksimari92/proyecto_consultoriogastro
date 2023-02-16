import React from 'react'

const Info = ({pacientes}) => {
  return (
    <div>
            {
                pacientes.map(
                    (paciente, index) => {
                      return  <div className="card" key={index}>
                            <h4>Nombre: {paciente.name} </h4>
                            <p>Email: {paciente.email} </p>
                            <p>Telefono: {paciente.phone} </p>
                            <p>Direccion: {paciente.address.street} {paciente.address.suite} </p>

                        </div>
                    }
                )
            }
    </div>
  )
}

export default Info