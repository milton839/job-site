import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as HiIcons from "react-icons/hi";
import { Link } from 'react-router-dom';

const Job = (props) => {
    const {title, company, location, experience, _id, jobPostStatus} = props.job;
    return (
        <div className="col-md-6 col-xl-6 col-sm-10 col-xs-10 col-lg-6 col-10 mt-2">
            <div className="card rounded" style={{width: '33rem', backgroundColor:'#f5f5f5'}}>
                <Link to={`/jobDetails/${_id}`} style={{textDecoration: 'none'}}>
                    <div className="card-body">
                        <h5 className="text-uppercase" style={{color:'#348334'}}>{title}</h5>
                        <h5 className="text-uppercase" style={{color:'#333333'}}>{company}</h5>
                        <p style={{color:'#656565'}}><HiIcons.HiLocationMarker /> {location}</p>
                        <p style={{color:'#656565'}}><FaIcons.FaBriefcase /> {experience}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Job;