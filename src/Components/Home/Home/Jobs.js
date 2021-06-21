import React, { useEffect, useState } from 'react';
import Job from './Job';

const Jobs = () => {

    const [jobsData, setJobsData] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/jobsFilter?search='+search)
        .then(response => response.json())
        .then(data => setJobsData(data))
    },[search]);
    console.log(jobsData)

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
    console.log(search)
    
    return (
        <section className="container mb-5">
            <div className="search mx-5 mt-3 rounded-circle-pill">
                <input onChange={handleSearch} className="form-control rounded-pill p-3" type="text" placeholder="Search your jobs"/>
            </div>
            <div className="row">
                    {
                        jobsData.map(job => <Job job={job}></Job>)
                    }
            </div>
        </section>
    );
};

export default Jobs;