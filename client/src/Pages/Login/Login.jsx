import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className='main-container'>
            <div className="home">
                <p onClick={()=>navigate('/')}>Home</p>
            </div>
            <div className="form-container">
                <form typeof='submit'>
                    <label>Username</label>
                    <input type="text" placeholder='type username' required />
                    <label>Email</label>
                    <input type="text" placeholder='type email' required />
                    <label>Password</label>
                    <input type="password" placeholder="password" required />
                    <button>Submit</button>
                </form>
            </div>


        </div>
    )
}

export default Login