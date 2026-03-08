import React, { useEffect, useState } from 'react'
import './FetchedProjects.css'
import axios from 'axios'


const FetchedProject = () => {

    const [projects,setProjects] = useState([]);


    const fetchProjects = async()=>{
        const {data} = await axios.get(
            "http://localhost:4000/api/project/list"
        )
        setProjects(data.projects)
    }

    useEffect(()=>{
        fetchProjects();
    },[])

  return (
    <div className='fetched-container' id='projects'>
        {projects.length > 0 &&  <h1>Projects</h1> }
        <div className="card-container"> 
        {projects?.map((project)=>(
            <div className='card' key={project._id}>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
            </div>
           
        ))}
        </div>
    </div>
  )
}

export default FetchedProject