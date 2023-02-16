import React, { useState } from 'react'
import { useStore } from 'zustand';
import { useAuth } from '../../store';
import './Login.css'
import Succes from './Succes';
// import Error from './Error'

const Login = () => {
  // const {users} = useStore();
  const users = [{email:"user@mail", id: 22}]
   console.log(users)

  // const [isLogged, setIsLogged] = useAuth();
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    email: null,
    pass: null
  })

  const handleChangeInputEmail = (e) => {

    setUser({
      ...user,
      email: e.target.value

    })

  }

  const handleChangeInputPass = (e) => {

    setUser({
      ...user,
      pass: e.target.value

    })

  }

  // //Ingreso 
  // //user: george.edwards@reqres.in
  // // pass: 11
  const validarDatos = (e) => {
    e.preventDefault();
    users.forEach(item => {
      console.log(user.email === item.email && user.pass === (item.id).toString() ? setIsLogged(true) : "false");
    }
    );

  }

  return (
  
      isLogged ? <Succes /> :
      <>
       <h1>Bienvenido</h1>
      <form action="" className='form-gruop mt-5 mb-3' onSubmit={validarDatos}>
        <input type="text" placeholder='Usuario' className='form-control mb-3' onChange={handleChangeInputEmail} />
        <input type="password" placeholder='Ingrese su clave' className='form-control mb-3' onChange={handleChangeInputPass} />
        <input type="submit" value="Iniciar sesion" className='btn btn-primary mb-5' />
      </form>
      </>
    
  )
}

export default Login