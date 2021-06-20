import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {

    const [jobsData, setJobsData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/jobs',)
        .then(response => response.json())
        .then(data => setJobsData(data))
    },[]);
    console.log(jobsData)
    
    return (
        <section className="container mb-5">
            <div className="row">
                    {
                        jobsData.map(job => <Job job={job}></Job>)
                    }
            </div>
        </section>
    );
};

export default Jobs;