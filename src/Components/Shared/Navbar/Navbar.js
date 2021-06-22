import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const [isPremiumEmployer, setIsPremiumEmployer] = useState(false);
    const [isStandardEmployer, setIsStandardEmployer] = useState(false);
    const [isBasicEmployer, setIsBasicEmployer] = useState(false);

    useEffect(() => {
        fetch('https://job-hunting25.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, []);

    useEffect(() => {
        fetch('https://job-hunting25.herokuapp.com/getPremiumEmployer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsPremiumEmployer(data));
    }, []);

    useEffect(() => {
        fetch('https://job-hunting25.herokuapp.com/getStandardEmployer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsPremiumEmployer(data));
    }, []);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3" style={{backgroundColor:'#f8f9fa'}}>
            <div className="container-fluid">
                <a rel="noreferrer" href="/" className="navbar-brand fw-bold ms-5 fs-3" style={{color:'#0CAA41'}}>Job Hunting</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link me-5 active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/employers" className="nav-link me-5">For Employers</Link>
                        </li>
                        {
                            (isPremiumEmployer || isAdmin) && <li className="nav-item">
                            <Link to="/addJob" className="nav-link me-5">Dashboard</Link>
                        </li>
                        }
                        {
                            isAdmin && <li className="nav-item">
                            <Link to="/pendingJob" className="nav-link me-5">Admin</Link>
                        </li>
                        }
                    </ul>
                    <Link to="/login" >
                        {
                            loggedInUser.email ? <button className="login-btn"> Log Out</button> : <button className="login-btn"> Login</button>
                        }
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;