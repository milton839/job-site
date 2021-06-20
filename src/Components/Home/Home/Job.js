import React from 'react';
import * as HiIcons from "react-icons/hi";
import { Link } from 'react-router-dom';

const Job = (props) => {
    const {title, company, location, experience, _id} = props.job;
    return (
        <div className="col-md-6 mt-2">
            <div className="card" style={{width: '33rem', backgroundColor:'#FAF8E2'}}>
                <Link to={`/jobDetails/${_id}`}>
                    <div className="card-body" style={{textDecoration: 'none'}}>
                        <h4 className="text-uppercase" style={{color:'#348334'}}>{title}</h4>
                        <h5 className="text-uppercase">{company}</h5>
                        <p><HiIcons.HiLocationMarker /> {location}</p>
                        <p>{experience}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Job;