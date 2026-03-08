import React from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'

const SideBar = () => {
    return (
        <div className='sidebar-container'>
            <NavLink end={true} to='/admin' className={({ isActive }) => (isActive ? "link active" : "link")}>
                <p>Dashboard</p>
            </NavLink>

            <NavLink to='/admin/addProject' className={({ isActive }) => (isActive ? "link active" : "link")}>
                <p>Add Project</p>
            </NavLink>

            <NavLink to='/admin/listProject' className={({ isActive }) => (isActive ? "link active" : "link")}>
                <p>Projects List</p>
            </NavLink>

        </div>
    )
}

export default SideBar