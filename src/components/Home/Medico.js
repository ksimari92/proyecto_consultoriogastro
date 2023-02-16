import React from 'react'
import { useStore } from '../../store'

const Medico = () => {
const {users} = useStore()

  return (
    <div className='doctor-card' >
        {/* <img src= alt="" /> */}
    </div>
  )
}

export default Medico