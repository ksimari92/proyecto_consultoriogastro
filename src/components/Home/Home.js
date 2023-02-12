import React, { useState } from 'react'
import './Home.css'
import Header from './Header'
import Galeria from './Galeria'
import Contacto from './Contacto'
import Nosotros from './Nosotros'
import Login from '../Login/Login'

const Home = ( {users}) => {
  const [isTrue, setIsTrue] = useState(false);
  console.log(users)

  const handleClickEventLog =() => {
    if (!isTrue) {
      setIsTrue(true)
    } 
  }

  const handleClickEventHome =() => {
    if (isTrue) {
      setIsTrue(false)
    } 
  }   

  return (
    <div>
      <Header handleClickEventLog={handleClickEventLog} handleClickEventHome={handleClickEventHome}/>

      {isTrue ? <Login users={users}/> : 
       <> 
        <Nosotros/>
        <Galeria/>
        <Contacto/>
        </>
  }
    </div>
  )
}

export default Home