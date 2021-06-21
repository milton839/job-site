import React, { useEffect, useState } from 'react';
import AdminNav from '../Admin/AdminNav';
import PendingJobList from './PendingJobList';

const PendingJob = () => {

    const [pendingJobs, setPendingJobs] = useState([]);

    useEffect(() => {
        fetch('https://job-hunting25.herokuapp.com/jobs',)
        .then(response => response.json())
        .then(data => setPendingJobs(data))
    },[]);
    
    return (
        <section>
            <div>
                <AdminNav />
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <table className="table table-striped table-hover">
                    <thead>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Status</th>
                        <th>Experience</th>
                        <th>Salary</th>
                        <th>Action</th>
                        <th>Created Time</th>
                    </thead>
                    <tbody>
                        {
                            pendingJobs.map(pending => <PendingJobList pending={pending}></PendingJobList>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default PendingJob;