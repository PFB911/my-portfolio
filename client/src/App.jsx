import React from 'react'
import Landing from './Components/Landing/Landing'
import Contact from './Components/Contact/Contact'

import { ToastContainer, toast } from 'react-toastify';
import background_main from './assets/background_main.png'
import background_hd2 from './assets/background_hd2.png'
import autumn_bg from './assets/autumn_bg.webp'
import './App.css'
import Stack from './Components/Stack/Stack';
import Projects from './Components/Projects/Projects';
import background_new from './assets/backg_new.png'
import bg_black from './assets/bg_black.png'
import NavBar from './Components/NavBar/NavBar';
import Education from './Components/Education/Education';
import AboutMe from './Components/AboutMe/AboutMe';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login';
import AdminPanel from './Pages/Admin/AdminPanel';
import Dashboard from './Pages/Admin/Dashboard';


import AddProject from './Pages/Admin/AddProject';
import ListProject from './Pages/Admin/ListProject';
import FetchedProject from './Components/FetchedProjects/FetchedProject';


const App = () => {
  return (
    <div className='app' >
 <ToastContainer />
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/admin' element={<AdminPanel />} /> */}

        <Route path='/admin' element={<AdminPanel />}>
          <Route index element={<Dashboard />} />
          <Route path='addProject' element={<AddProject/>} />
          <Route path='listProject' element={<ListProject />} />
          

        </Route>
      </Routes>

      {/* <Projects/> */}
    


     

    </div>
  )
}

export default App