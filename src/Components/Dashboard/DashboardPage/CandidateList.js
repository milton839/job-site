import React, { useEffect, useState } from 'react';
import DashboardNav from '../Dashboard/DashboardNav';
import AllCandidate from './AllCandidate';

const CandidateList = () => {

    const [candidate, setCandidate] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/candidate',)
        .then(response => response.json())
        .then(data => setCandidate(data))
    },[]);
    console.log(candidate)
    
    return (
        <section className="">
            <div>
                <DashboardNav></DashboardNav>
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <h3>Total Records: {candidate.length}</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Position</th>
                        <th>Company</th>
                        <th>Salary</th>
                        <th>Created Time</th>
                    </thead>
                    <tbody>
                        {
                            candidate.map(candidate => <AllCandidate candidate={candidate} key={candidate._id}></AllCandidate>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default CandidateList;