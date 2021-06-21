import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbar.css';

const Navbar = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    const [isEmployer, setIsEmployer] = useState(false);

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
        fetch('https://job-hunting25.herokuapp.com/isEmployer', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsEmployer(data));
    }, []);
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-3" style={{backgroundColor:'#f8f9fa'}}>
            <div className="container-fluid">
                <a target="_blank" rel="noreferrer" href="/home" className="navbar-brand ms-5 fs-3">Job Hunting</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link me-5 active" aria-current="page">Home</Link>
                        </li>
                        {
                            (isEmployer || isAdmin) && <li className="nav-item">
                            <Link to="/addJob" className="nav-link me-5">Dashboard</Link>
                        </li>
                        }
                        {
                            (isEmployer) && <li className="nav-item">
                            <Link to="/payment" className="nav-link me-5">Payment System</Link>
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