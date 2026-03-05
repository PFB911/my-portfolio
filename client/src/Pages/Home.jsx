import React from 'react'
import Landing from '../Components/Landing/Landing'
import AboutMe from '../Components/AboutMe/AboutMe'
import Education from '../Components/Education/Education'
import Contact from '../Components/Contact/Contact'
import NavBar from '../Components/NavBar/NavBar'

const Home = () => {
    return (
        <>
            <NavBar />
            <Landing />
            <AboutMe />
            <Education />
            <Contact />
        </>
    )
}

export default Home