import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import firebaseConfig from '../../firebaseConfig';
import Navbar from '../Shared/Navbar/Navbar';




const Login = () => {
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
                        <div className="mb-5">
                            {
                                user.isSignedIn ? <Button onClick = {handleGoogleSignOut} style={{ width:'100%',backgroundColor:'tomato',color:'white',border:'0',padding:'20px 0 20px 0', marginBottom:'50px' }}><FaGoogle /> Google Sign Out</Button> : <button onClick = {handleGoogleSignIn} style={{ width:'100%',backgroundColor:'tomato',color:'white',border:'0',padding:'20px 0 20px 0', marginBottom:'50px' }}><FaGoogle /> Google Sign In</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;