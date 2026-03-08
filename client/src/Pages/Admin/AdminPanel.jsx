import React from 'react'
import './AdminPanel.css'
import { Outlet, useNavigate } from 'react-router'
import SideBar from '../../Components/Admin/SideBar'


const AdminPanel = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
  }

  return (

    <div className='admin-container'>
      <div className="nav">
        <p className='logo' onClick={() => navigate('/')}>pdevq</p>
        <button className='btn' onClick={logout}>Logout</button>
      </div>

      <div className='sidebar'>
        <SideBar/>
        <Outlet/>

      </div>
    </div>

  )
}

export default AdminPanel