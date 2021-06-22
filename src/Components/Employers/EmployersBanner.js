import React from 'react';
import { Link } from 'react-router-dom';
import employee from '../../images/employee.jpg';

const EmployersBanner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{text:'center'}}>
                    <h2 className="mt-5" style={{color:'#242A33',fontSize:'50px', fontWeight:'bold'}}>Your employer brand starts here.</h2>
                    <p>Authentic reviews, rich storytelling and powerful insights, found only on Job Hunting, help you attract top talent.</p>
                    <Link to="#">
                        <button type="button" className="btn text-white fw-bold"style={{backgroundColor:'#0CAA41'}}>GET STARTED</button>
                    </Link>
                </div>
                <div className="col-md-6" style={{display:'flex',justifyContent:'center',alignItems: 'center'}}>
                    <img src={employee} className="img-fluid w-100 mt-4" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default EmployersBanner;