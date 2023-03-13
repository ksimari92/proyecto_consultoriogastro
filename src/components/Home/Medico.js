import React from 'react'

const Medico = ({ user }) => {

    return (
        <div className='doctor-card' >
            <img src={user.avatar} className='rounded' alt="Doctor" />
            <h5>{user.first_name} {user.last_name}</h5>
            <p className='fuente-email'>{user.email}</p>
        </div>

    )

}

export default Medico