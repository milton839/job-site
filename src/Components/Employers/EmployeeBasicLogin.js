import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebaseConfig';
import Navbar from '../Shared/Navbar/Navbar';




const EmployeeBasicLogin = () => {
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

    const [employer, setEmployer] = useState(false)

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName,email,photoURL} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name:displayName,
                email:email,
                image:photoURL
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch(error => {
            console.log(error);
            console.log(error.message);
        })
    }

    const handleGoogleSignOut = () => {
        firebase.auth().signOut().then(() => {
            const signOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                image: ''
            }
            setUser(signOutUser);
            setLoggedInUser(signOutUser);
          }).catch((error) => {
            // An error happened.
          });
    }

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
            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
            });
        }

        const employerData ={
            name: info.name,
            email: info.email,
        }

        const url = `https://job-hunting25.herokuapp.com/addEmployer`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(employerData)
        })
        .then(res => {
            console.log(res);
        });

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

    

    return (
        <section>
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
                                        newUser && <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="text" className="form-control p-4 rounded-pill" name="name" placeholder="Full Name" required/>
                                    </div>
                                    }
                                    <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="email" className="form-control p-4 rounded-pill" name="email" placeholder="Email Address" required/>
                                    </div>
                                    {
                                        employer && <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="number" className="form-control p-4 rounded-pill" name="phone" placeholder="Your Phone Number" required/>
                                    </div>
                                    }
                                    <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="password" className="form-control p-4 rounded-pill" name="password" placeholder="Password" required/>
                                    </div>
                                    {
                                        newUser && <div className="mb-3 ">
                                        <input onBlur={handleBlur} type="password" className="form-control p-4 rounded-pill" name="confirm-password" placeholder="Confirm Password" required/>
                                    </div>
                                    }
                                    {/* {
                                        newUser && <div>
                                            <input type="checkbox" onChange={()=>setEmployer(!employer)} name="employer" value="Bike"/>
                                            <label for="vehicle1" className="ms-2"> For Employer Account</label>
                                        </div>
                                    } */}
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
                                {/* <div className="mb-5">
                                    {
                                        user.isSignedIn ? <Button onClick = {handleGoogleSignOut} style={{ width:'100%',backgroundColor:'tomato',color:'white',border:'0',padding:'20px 0 20px 0', marginBottom:'50px' }}><FaGoogle /> Google Sign Out</Button> : <button onClick = {handleGoogleSignIn} style={{ width:'100%',backgroundColor:'tomato',color:'white',border:'0',padding:'20px 0 20px 0', marginBottom:'50px' }}><FaGoogle /> Google Sign In</button>
                                    }
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmployeeBasicLogin;