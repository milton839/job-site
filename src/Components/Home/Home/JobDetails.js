import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const JobDetails = () => {

    const [jobsData, setJobsData] = useState([]);

    const {jobId} = useParams();
    

    useEffect(() => {
        fetch('http://localhost:4000/jobs',)
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
                            <h5>Vacancy:<br></br><span className="text-center">02</span></h5>
                            <h5>Employment Status<br></br><span>Full-time</span></h5>
                            <h5>Educational Requirements</h5>
                            <h5>Experience Requirements</h5>
                            <h5>Job Location</h5>
                            <h5>Salary</h5>
                            <h5>Compensation & Other Benefits</h5>
                            <button className="btn btn-primary">Apply the job</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobDetails;