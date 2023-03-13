import React, { useState, useEffect } from 'react';
import { store, usePacients, useStore } from './store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login.js';
import Pacientes from './components/Pacientes/Pacientes.js';
// import Login from './components/Login/Login';

function App() {
const { setUsers,users } = useStore();
const {setPacients, pacients} = usePacients();

  const getUsers = async (url) => {
    await fetch(url)
      .then((response) =>
        response.json()
      )
      .then((data) => {
        const persons = data.data
        setUsers(persons)
      });
  };

  const getPacients = async (url) => {
    await fetch(url)
      .then((response) =>
        response.json()
      )
      .then((data) => {
        setPacients(data)
      });
  };

  useEffect(()=>{
    console.log(users)
    console.log(pacients)
  },[users,pacients])

  useEffect(() => {
    getUsers('https://reqres.in/api/users?page=1%27');
    getPacients('https://jsonplaceholder.typicode.com/users');
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home users={users}/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/pacientes' element={<Pacientes/>}/>

          {/* 
            <Route path='/turnos' element={}/>
            <Route path='/indice' element={}/>  */}
        </Routes>

         {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App; 


// export default App;
