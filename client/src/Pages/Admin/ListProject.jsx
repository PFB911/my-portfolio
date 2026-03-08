import React, { useEffect } from 'react'
import './ListProject.css'
import { useContext } from 'react'
import { AppContext } from '../../Context/AppContext';
import { toast } from 'react-toastify'
import axios from 'axios';


const ListProject = () => {

  const {projects, fetchProjects, setProjects} = useContext(AppContext);

  const handleDelete = async(id) =>{
    console.log("Deleting:", id);
    try {
      const { data } = await axios.delete(`http://localhost:4000/api/project/delete/${id}`)

     

      if(data.success){
        // setProjects(prev => prev.filter(project => project._id !== id))
        toast.success(data.message)
        fetchProjects();
      } else {

      toast.error(data.message)

    }
      
    } catch (error) {
       console.log("DELETE ERROR:", error);
       toast.error("Something went wrong");
      }
  }

  useEffect(()=>{
    fetchProjects();
  },[])



  return (
    <div className='tablelist-container'>
      <table className='project-table'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>X</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((project)=>{
            return( <tr key={project._id}>
              <td>{project.title}</td>
               <td>{project.description}</td>
               <td onClick={()=> handleDelete(project._id)}>x</td>
            </tr>)
           
          })}
        </tbody>
      </table>



    </div>
  )
}

export default ListProject