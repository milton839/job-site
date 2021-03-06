import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Job from './Job';
import Pagination from './Pagination';

const Jobs = () => {

    const [jobsData, setJobsData] = useState([]);
    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(20);

    useEffect(() => {
        fetch(`https://job-hunting25.herokuapp.com/jobsFilter?search=${search}`)
        .then(response => response.json())
        .then(data => setJobsData(data))
    },[search]);
    console.log(jobsData)

    const handleSearch = (event) =>{
        setSearch(event.target.value)
    }
    console.log(search)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = jobsData.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    return (
        <section className="container mb-5">
            <div className="search mx-5 mt-3 rounded-circle-pill">
                <input onChange={handleSearch} className="form-control text-uppercase rounded-pill p-3" type="text" placeholder="Search your jobs"/>
            </div>
            <div className="row">
                {
                    jobsData.length === 0 && <Spinner style={{ margin:'0 auto' }} animation="grow" variant="primary" />
                }
                    {
                        currentPosts.map(job => (job.jobPostStatus==='Approved') && <Job job={job}></Job>)
                    }
            </div>
            <div className="d-flex justify-content-center mt-3">
                    <Pagination postPerPage={postPerPage} totalPosts={jobsData.length} paginate={paginate} />
            </div>
        </section>
    );
};

export default Jobs;