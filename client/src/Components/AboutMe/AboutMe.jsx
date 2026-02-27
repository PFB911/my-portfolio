import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div id='aboutme' className='about-container'>
            <h1 className="title">Briefly about me</h1>
            <p>Hello again! I'm <span>Pierfrancesco</span> but you can call me <span>Pier</span>. <br/> 
             <br />
            My passion for coding began while studying 
            genetic code and evolutionary patterns. <br />
            <br />
            Combined with my interest in communication, this led me to front-end development,
            where I focus on creating efficient platforms 
            and clear web pages. 
            {/* to display insights from data analysis.  */}
            <br />
             <br />
            That's my <span>purpose</span>: making information clear, insightful, and accessible.

            {/* I built this page to showcase my skills in building 
            web apps and I hope you will find it useful. I'm all 
            about life and I have many interests and areas 
            where I developed skills proficiently. 
            My scientific background helped me in developing a 
            critical view of the world, equipping me with the 
            ability to make decisions based on evidence. My 
            passion for "coding" was born by reading and 
            studying about genetic code evolutive patterns. 
            My interest in communication led me to develop my 
            knowledge of front-end development with the intent 
            of creating efficient platforms and clear pages to 
            display insightful information obtained via Data 
            Analyses. That's my purpose, giving the chance to 
            understand more in an accessible way.</p> */}</p>
        </div>
    )
}

export default AboutMe