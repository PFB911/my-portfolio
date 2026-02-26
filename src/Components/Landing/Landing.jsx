import React from 'react'
import background_main from '../../assets/background_main.png'
import background_2 from '../../assets/background_2.png'
import './Landing.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import foto from '../../assets/foto_circ.png'




const Landing = () => {
    return (
        <div className='landing'>
            <div className="container">
                <img src={foto} alt="" />
                <div className="text-container">
                    <h1>Hi, I'm <span>Pierfrancesco Boldini</span></h1>
                    <h2>I'm a <span>web developer</span> based in Rovaniemi (FI)</h2>
                    <p>I build digital spaces  where design meets intention.</p>
                </div>
                <div className="buttons">
                    <AnchorLink href='#contact'><button className='btn-1'>Get in Touch!</button></AnchorLink>
                    <AnchorLink href='#aboutme'><button className='btn-2'>About me</button></AnchorLink>
                </div>
            </div>
            <div className="title-small">
                <h1>Hi, I'm <span>Pier</span> and I'm a <span>web developer</span></h1>
            </div>
            <div className="container-small">
                <AnchorLink href='#aboutme'><p>AboutMe</p></AnchorLink>
                <AnchorLink href='#education'><p>Education</p></AnchorLink>
                <AnchorLink href='#projects'><p>Projects</p></AnchorLink>
                <AnchorLink href='#contact'><p>Contact</p></AnchorLink>
            </div>

        </div>
    )
}

export default Landing