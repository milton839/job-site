import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Header from '../Header/Header';


const JobDetails = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [jobsData, setJobsData] = useState([]);

    const {jobId} = useParams();
    

    useEffect(() => {
        fetch('https://job-hunting25.herokuapp.com/jobs',)
        .then(response => response.json())
        .then(data => setJobsData(data))
    },[]);

    const selectJobs = jobsData.find(job => job._id === jobId);

    return (
        <section style={{backgroundColor:'#eeeeee'}}>
            <Header />
            <div className="container mt-3" >
                <div className="col-md-10 m-auto pb-5">
                    <div class="card" style={{width: '60rem',boxShadow:'15px 15px 15px gray', marginBottom:'200px', backgroundColor:'#f8f9fa'}}>
                        <div class="card-body">
                            <h3 class="card-title" style={{color:'#2B882F'}}>{selectJobs?.title}</h3>
                            <h5>{selectJobs?.company}</h5>
                            <h5>Vacancy:<br></br><span className="text-center">{selectJobs?.vacancy}</span></h5>
                            <h5>Employment Status<br></br><span>{selectJobs?.jobStatus}</span></h5>
                            <h5>Educational Requirements<br></br><span>{selectJobs?.education}</span></h5>
                            <h5>Experience Requirements<br></br><span>{selectJobs?.experience}</span></h5>
                            <h5>Job Location<br></br><span>{selectJobs?.location}</span></h5>
                            <h5>Salary<br></br><span>{selectJobs?.salary}</span></h5>
                            <h5>Compensation & Other Benefits</h5>
                            <Link to="/applyForm">
                                <button className="btn btn-primary">Apply the job</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;