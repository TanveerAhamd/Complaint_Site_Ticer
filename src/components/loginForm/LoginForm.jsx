import './loginForm.css'
import React, { useState } from 'react'
import logo from './image/Dashbordlogo.webp'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginInputs = () => {
        axios.post("https://server-delta-mocha.vercel.app/api/login", {
            email,
            password: password
        })
            .then(res => {
                if (res.data.status === true) {
                    localStorage.setItem("userId", res.data.token)
                    toast("Login Successfully !", {
                        autoClose: 1000,
                    });
                    navigate("/dashboard");
                    setEmail("");
                    setPassword("");
                } else {
                    alert("Email or Password error !");
                }
            });
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            loginInputs();
        }
    };

    return (
        <div className="loginFormWrapper">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-lg-4 p-5 text-center shadow rounded">
                        <div className="text-center p-2">
                            <img className='loginDashbord img-fluid' src={logo} alt="Logo" />
                        </div>
                        <h2 className="fw-bold">Welcome back</h2>
                        <p className="text-black-50">Please enter your login and password!</p>
                        <div className="mb-3">
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg>
                                </span>
                                <input type="email" onChange={(e) => { setEmail(e.target.value) }} value={email} className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="input-group">
                                <span className="input-group-text bg-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key" viewBox="0 0 16 16">
                                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8m4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5" />
                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                    </svg>
                                </span>
                                <input onKeyDown={handleKeyDown} type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} className="form-control" placeholder="Password" />
                            </div>
                        </div>
                        <p className="small mb-3"><a className="text-black-50" href="#">Forgot password?</a></p>
                        <button onClick={loginInputs} className="btn btn-color btn-sm text-white w-100" type="submit">Login</button>
                        <div className="mt-3">
                            <p className="mb-0">Don't have an account? <a href="#!" className="text-black-50 fw-bold">Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;
