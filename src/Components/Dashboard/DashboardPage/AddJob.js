import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import DashboardNav from '../Dashboard/DashboardNav';

const AddJob = () => {

    const [info, setInfo] = useState({});
    
    const [jobPostStatus, setJobPostStatus] = useState("Pending");
    console.log(jobPostStatus)

    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const [totalJobs, setTotalJobs] = useState([]);
        useEffect(() => {
            fetch('https://job-hunting25.herokuapp.com/jobListByEmail?email='+loggedInUser.email)
            .then(response => response.json())
            .then(data => setTotalJobs(data));
        }, []);

        const totalJob = totalJobs.length;

    const handleSubmit = (e) => {
        const jobsData ={
            name:info.name,
            email:loggedInUser.email,
            title: info.title,
            company: info.company,
            location: info.location,
            experience: info.experience,
            vacancy: info.vacancy,
            jobStatus: info.jobStatus,
            description: info.description,
            education: info.education,
            salary: info.salary,
            benefits: info.benefits,
            jobPostStatus: jobPostStatus,
        }


        const url = `https://job-hunting25.herokuapp.com/addJob`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(jobsData)
        })
        .then(res => {
            console.log(res);
        });
        e.preventDefault();
    }
    return (
        <section className="">
            <div>
                <DashboardNav></DashboardNav>
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <div className="col-md-6">
                        <h2>You Have left job post: {10-totalJob}</h2>
                    <h2 className="text-brand">Add a Job</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your Name"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="email" value={loggedInUser.email}  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Job Title"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company Name"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="Job Location"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="experience" placeholder="Experience"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="vacancy" placeholder="Total vacancy"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="jobStatus" placeholder="Job Status"  required />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Job Description" required ></textarea>
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="education" placeholder="Education Recuirements"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="salary" placeholder="Job Salary"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="benefits" placeholder="Job Benefits"  required />
                        </div>
                        <button type="submit" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addJob">Submit</button>
                            <div className="modal fade" id="addJob" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-center" id="exampleModalLabel">Welcome</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        Your have successfully add your job post. 
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default AddJob;