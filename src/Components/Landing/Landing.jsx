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
                    <AnchorLink href='#bio'><button className='btn-2'>About me</button></AnchorLink>
                </div>
            </div>

        </div>
    )
}

export default Landing