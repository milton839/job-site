import React, { useState } from 'react';
import './Login.css';
import Navbar from '../Shared/Navbar/Navbar';

const Login = () => {
    const [user, setUser] = useState(true);

    const handleBlur = (event)=> {
        console.log(event.target.name, event.target.value);
    }

    const handleSubmit = (event) =>{
        console.log(event.target.email, event.target.value)
        event.preventDefault();
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 m-auto pt-3">
                        <div className="card sign-in-card" >
                            <div className="card-header sign-in-head bg-primary text-white text-center">
                                {
                                    user ? <h2>Sign In</h2> : <h2>Sign Up</h2>
                                }
                            </div>
                            <div className="card-body mx-5">
                                <form className="" onSubmit={handleSubmit}>
                                    {
                                        !user && <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="text" className="form-control p-4 rounded-pill" name="name" placeholder="Full Name" required/>
                                    </div>
                                    }
                                    <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="email" className="form-control p-4 rounded-pill" name="email" placeholder="Email Address" required/>
                                    </div>
                                    <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="password" className="form-control p-4 rounded-pill" name="password" placeholder="Password" required/>
                                    </div>
                                    {
                                        !user && <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="password" className="form-control p-4 rounded-pill" name="confirm-password" placeholder="Confirm Password" required/>
                                    </div>
                                    }
                                    {
                                        user ? <p>If you don't have any account? <span onClick={() => setUser(!user)} style={{cursor:"pointer",color:"tomato"}}>Sign Up</span></p> : <p>If you have any account?<span onClick={() => setUser(!user)} style={{cursor:"pointer",color:"tomato"}}>Sign In</span></p>
                                    }
                                    <div className="d-grid gap-2">
                                        {
                                            user ? <button className="btn btn-primary rounded-pill p-2" type="submit">Sign In</button> : <button className="btn btn-primary rounded-pill p-2" type="submit">Sign Up</button>
                                        }
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;