import React, { useContext, useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../Context/AppContext';
import axios from 'axios';


const Login = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {backendUrl, setIsLoggedin} = useContext(AppContext)

    const navigate = useNavigate();

    const onSubmitHandler = async(e) =>{
        e.preventDefault();

        try {
            
            axios.defaults.withCredentials = true;

            const {data} = await axios.post(backendUrl + '/api/auth/login', {email,password})

            if(data.success){
                setIsLoggedin(true)
                
                navigate('/admin')
            }else{
                alert(data.message)
            }

        } catch (error) {
            console.error(error)
            
        }
    }
    return (
        <div className='main-container'>
            <div className="home">
                <p onClick={()=>navigate('/')}>Home</p>
            </div>
            <div className="form-container">
                <form onSubmit={onSubmitHandler}>
                    {/* <label>Username</label>
                    <input type="text" placeholder='type username' required /> */}
                    <label>Email</label>
                    <input 
                    onChange={e => setEmail(e.target.value)}
                    value={email} 
                    type="text" placeholder='type email' required />
                    <label>Password</label>
                    <input 
                    onChange={e => setPassword(e.target.value)}
                    value={password}  
                    type="password" placeholder="password" required />
                    <button>Submit</button>
                </form>
            </div>


        </div>
    )
}

export default Login