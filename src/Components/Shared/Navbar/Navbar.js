import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div class="container-fluid">
                <a target="_blank" rel="noreferrer" href="/home" class="navbar-brand ms-5">W3S CLOUD</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/home" class="nav-link me-5 active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dashboard" class="nav-link me-5" href="#">Dashboard</Link>
                        </li>
                    </ul>
                    <Link to="/login" >
                        <button class="login-btn"> Login</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;