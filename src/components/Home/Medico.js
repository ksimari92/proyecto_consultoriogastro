import React from 'react'

const Medico = ({ user }) => {

    return (
        <div className='doctor-card' >
            <img src={user.avatar} alt="Doctor" />
            <h4>{user.first_name} {user.last_name}</h4>
            <p>{user.email}</p>
        </div>

    )

}

export default Medico