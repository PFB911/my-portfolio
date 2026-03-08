import React, { useContext, useState } from 'react'
import './AddProject.css'
import axios from 'axios'
import { toast } from 'react-toastify';
import FetchedProject from '../../Components/FetchedProjects/FetchedProject';
import { AppContext } from '../../Context/AppContext';

const AddProject = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { fetchProjects } = useContext(AppContext);


  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/project/add",
        { title, description }
      );
      console.log("SERVER RESPONSE:", data);
      if (data.success) {
        toast.success(`Project ${title} added`)
        setTitle("");
        setDescription("");
        fetchProjects();
      }
    } catch (error) {
      toast.error(error)
      console.log(error)
    }
  }

  return (
    <div className='blog-container'>
      <form onSubmit={onSubmitHandler}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)} />

        <label>Describe yout project</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type='submit'>Publish</button>
      </form>

    </div>
  )
}

export default AddProject;