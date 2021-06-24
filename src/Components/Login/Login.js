import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebaseConfig';
import EmployeeType from "../Employers/EmployeeType";
import Navbar from '../Shared/Navbar/Navbar';
import './Login.css';




const Login = () => {

    const [jobSeeker, setJobSeeker] = useState(false);
    const [employers, setEmployers] = useState(false);


    document.title = "Login page";
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const [info, setInfo] = useState([]);
    
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        phone: '',
        error: '',
        success: false,
        image: ''
    })

    const handleBlur =(event) =>{
        console.log(event.target.name, event.target.value);

        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
        
        let isFieldValid = true;
        if(event.target.name === "email"){
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        if(event.target.name === "password"){
            const isPasswordValid = event.target.value.length > 6
            const isPasswordHasNumber = /\d{1}/.test(event.target.value);
            isFieldValid = isPasswordValid && isPasswordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[event.target.name] = event.target.value;
            console.log(newUserInfo)
            setUser(newUserInfo);
        }
    }

    console.log(info);

    const handleSubmit =(event) =>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                console.log(result)
                const newUserInfo = {...user};
                console.log(newUserInfo)
                newUserInfo.error = '';
                newUserInfo.success = true;
                setUser(newUserInfo);
                if(result){
                    const jobSeekerData ={
                        name: info.name,
                        email: info.email,
                        role:"jobSeeker",
                        
                    }

                    const url = `https://job-hunting25.herokuapp.com/addUser`;
                    fetch(url,{
                        method:'POST',
                        headers:{
                            'Content-Type' : 'application/json'
                        },
                        body:JSON.stringify(jobSeekerData)
                    })
                    .then(res => {
                        console.log(res);
                    });
                }
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }

        

        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(result => {
                console.log(result)
                const {name,email,photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name:name,
                email:email,
                image:photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
            })
            .catch((error) => {
                const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
            });
        }
        event.preventDefault();
    }

    console.log(jobSeeker)

    return (
        <section>
            <Navbar></Navbar>
            <div className="container mb-5">
                <div className="row">
                    {
                            employers && <div style={{display: jobSeeker ? 'none': 'block'}}>
                                <EmployeeType />
                            </div>
                        }
                    <div className="col-lg-6 m-auto pt-3">
                        
                        {
                            jobSeeker && <div style={{display: employers ? 'none': 'block'}} >
                                <div className="card sign-in-card" style={{}} >
                                    <div className="card-header sign-in-head bg-primary text-white text-center">
                                        {
                                            user ? <h2>Sign In</h2> : <h2>Sign Up</h2>
                                        }
                                    </div>
                                    <div className="card-body mx-5">
                                        <form className="" onSubmit={handleSubmit}>
                                            {
                                                newUser && <div className="mb-3 ">
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
                                                newUser && <div className="mb-3 ">
                                                <input onBlur={handleBlur} type="password" className="form-control p-4 rounded-pill" name="confirm-password" placeholder="Confirm Password" required/>
                                            </div>
                                            }
                                            {
                                                newUser ? <p>If you have any account?<span onClick={() => setNewUser(!newUser)} style={{cursor:"pointer",color:"tomato"}}>Sign In</span></p> : <p>If you don't have any account? <span onClick={() => setNewUser(!newUser)} style={{cursor:"pointer",color:"tomato"}}>Sign Up</span></p>
                                            }
                                            <div className="d-grid gap-2">
                                                {
                                                    newUser ? <button className="btn btn-primary rounded-pill p-2" type="submit">Sign Up</button> :<button className="btn btn-primary rounded-pill p-2" type="submit">Sign In</button>
                                                }
                                            </div>
                                        </form>
                                        {
                                            user.success ? <p style = {{ color:'green' }}>Your account {newUser ? 'created' : 'login'} successfully!</p> :  <p style = {{ color:'red' }}>{user.error}</p>
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="card mt-3" >
                            <div className="card-body mx-5">
                                <h3 className="fw-bold">Your role*</h3>
                                <p style={{color:'gray'}}>Let us know how you'll be using our products</p>
                            <div className="account-role">
                                <div class="form-check">
                                    <input 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="role" 
                                        value="employer"
                                        id="flexRadioDefault1" 
                                        className="mr-2" 
                                        onChange={() => setEmployers(!employers)}
                                        style={{width:'20px',height:'20px'}}
                                    />
                                    <label 
                                        class="form-check-label fs-4" 
                                        for="flexRadioDefault1"
                                    >
                                        Employer
                                    </label>
                                </div>
                            </div>
                            <div className="account-role mt-3 mb-5">
                                <div class="form-check">
                                    <input 
                                        class="form-check-input" 
                                        type="radio" 
                                        name="role" 
                                        value="jobSeeker"
                                        id="flexRadioDefault1" 
                                        className="mr-2" 
                                        onChange={() => setJobSeeker(!jobSeeker)}
                                        style={{width:'20px',height:'20px'}}
                                    />
                                    <label 
                                        class="form-check-label fs-4" 
                                        for="flexRadioDefault1"
                                        
                                    >
                                        Job Seeker
                                    </label>
                                </div>
                            </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;

