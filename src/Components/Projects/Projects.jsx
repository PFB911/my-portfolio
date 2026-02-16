import React from 'react'
import './Projects.css'
import Stack from '../Stack/Stack'
import artist from '../../assets/singer.png'
import weather from '../../assets/weather-app.png'
import w_i_p from '../../assets/work-in-progress.webp'
import e_commerce from '../../assets/e-commerce.png'
import StackIcon from "tech-stack-icons";

const cards = [
   
    {
        id: 1,
        title: "Artist Page",
        link: "https://samwebpage.netlify.app/",
        description: "Artist's production and work, with admin panel to modify the public page (Work in progress).",
        stack:[<StackIcon name="react" />, <StackIcon name="tailwindcss" />,<StackIcon name="js" />,<StackIcon name="expressjs" />,<StackIcon name="mongodb" />],   
    },
    {
        id: 2,
        title: "Weather App",
       
        description: "Search worldwide locations and display local weather. API usage.",
        stack:[<StackIcon name="html5" />, <StackIcon name="css3" />, <StackIcon name="js" />],  
    },
    {
        id: 3,
        title: "Shop App",
        description: "Complete front-end and back-end e-commerce app, with admin panel and payment managment. (Copied project)",
        stack:[<StackIcon name="react" />,<StackIcon name="js" />,<StackIcon name="expressjs" />,<StackIcon name="mongodb" />],  
    },
     {
        id: 4,
        title: "Budgeting App",
        description: "(Work in progress)",
        stack:[],  
    },
   
]

const Projects = () => {
    return (
        <div id='projects' className='projects-container'>
            <div className='projects-title'>
                <h1>Projects</h1>
            </div>
            <div className="cards-container">
                {cards.map((item, i) => (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" key={i} className="card">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <img src={item.img} alt="" />
                        <ul>
                            {item.stack.map((tech,index)=>(
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>   
                    </a>
                ))}

            </div>
            {/* <div>
                <Stack/>
            </div> */}
           
        </div>
    )
}

export default Projects