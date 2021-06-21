import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        const jobsData ={
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
            if(res){
                alert('Your Job added successfully');
            }
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
                    <h2 className="text-brand">Add a Job</h2>
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default AddJob;