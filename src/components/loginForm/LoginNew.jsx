import React from 'react'
import './loginForm.css'
import logo from './image/Dashbordlogo.webp'


const LoginNew = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                       <img src={logo} className='rounded mx-auto d-block w-25 ' alt="" />
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginNew