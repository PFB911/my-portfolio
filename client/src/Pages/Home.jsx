import React from 'react'
import Landing from '../Components/Landing/Landing'
import AboutMe from '../Components/AboutMe/AboutMe'
import Education from '../Components/Education/Education'
import Contact from '../Components/Contact/Contact'
import NavBar from '../Components/NavBar/NavBar'
import FetchedProject from '../Components/FetchedProjects/FetchedProject'
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {
    return (
        <>
            <ToastContainer />
            <NavBar />
            <Landing />
            <AboutMe />
            <Education />
            <FetchedProject />
            <Contact />
        </>
    )
}

export default Home