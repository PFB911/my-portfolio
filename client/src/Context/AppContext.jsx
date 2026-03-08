import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const AppContext = createContext();

export const AppContextProvider = (props)=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);
    const [projects, setProjects] = useState([]);

    const fetchProjects = async()=>{
        const { data } = await axios.get("http://localhost:4000/api/project/list")
        setProjects(data.projects);
    };

    useEffect(()=>{
        fetchProjects();
    },[]);



    const value = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData, setUserData,
        projects, fetchProjects
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}