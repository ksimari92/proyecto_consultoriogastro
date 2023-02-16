import React , {useEffect, useState}from 'react'
import Header from '../Home/Header'
import Info from './Info';

const Pacientes = () => {
    const [pacientes, setPacientes] = useState([]);
    const getPacientes = (url) =>{
        fetch(url)
        .then(response => response.json())
        .then(data => setPacientes(data))
    }

    useEffect(() => {
      getPacientes('https://jsonplaceholder.typicode.com/users')
    }, [])

    console.log(pacientes)
    
  return (
    <>
        <Header/>
        <Info pacientes={pacientes} />

    </>
  )
}

export default Pacientes