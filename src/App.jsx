import React from 'react'
import Landing from './Components/Landing/Landing'
import Contact from './Components/Contact/Contact'

import { ToastContainer, toast } from 'react-toastify';
import background_main from '../src/assets/background_main.png'
import background_hd2 from '../src/assets/background_hd2.png'
import autumn_bg from '../src/assets/autumn_bg.webp'
import './App.css'
import Stack from './Components/Stack/Stack';
import Projects from './Components/Projects/Projects';
import background_new from '../src/assets/backg_new.png'
import bg_black from '../src/assets/bg_black.png'
import NavBar from './Components/NavBar/NavBar';
import Education from './Components/Education/Education';
import AboutMe from './Components/AboutMe/AboutMe';


const App = () => {
  return (
    <div className='app' >
      <NavBar/>
      <Landing/>
      <AboutMe/>
      <Education/>
      {/* <Projects/> */}
      
      <Contact/>
      <ToastContainer/>

    </div>
  )
}

export default App