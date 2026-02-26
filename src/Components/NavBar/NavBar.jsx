import React, { useEffect, useState } from 'react'
import './NavBar.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

const links = ["AboutMe","Education","Contact"]

const NavBar = () => {

    const [active, setActive] = useState("")




  return (
    <div className='nav-container'>
        <div className="logo">
            <h2>pdevq</h2>
        </div>
        <div className="links">
           {links.map((link) => (
            <AnchorLink href={`#${link.toLowerCase()}`} key={link}>
              <p
            className={active === link ? "active" : ""}
            onClick={() => setActive(link)}
          >
            {link}
          </p>
            </AnchorLink>
          
        ))}
            <button className="toggle-lang">EN</button>
        </div>
    
       
    </div>
  )
}

export default NavBar