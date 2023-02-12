import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import { useState, useEffect } from 'react';
// import Login from './components/Login/Login';


function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async (url) => {
     await fetch(url)
     .then(response => response.json())
     .then(data => setUsers(data.data))
  }

  useEffect(() => {
    getUsers("https://reqres.in/api/users?page=2")
  }, [])
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home users={users} />} />
          {/* <Route path='/pacientes' element={}/>
            <Route path='/turnos' element={}/>
            <Route path='/indice' element={}/> */}
        </Routes>

        {/* <Home /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
