import React, { useState, useEffect } from 'react';
import { store, useStore } from './store.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/Login/Login.js';
// import Login from './components/Login/Login';

function App() {
const { setUsers,users } = useStore()

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

  useEffect(()=>{
    console.log(users)
  },[users])

  useEffect(() => {
    getUsers('https://reqres.in/api/users?page=1%27');
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />


          {/* <Route path='/pacientes' element={}/>
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
