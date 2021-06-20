import React, { useState } from 'react';
import DashboardNav from '../Dashboard/DashboardNav';

const AddJob = () => {

    const [info, setInfo] = useState({});

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
            description: info.description,
        }

        const url = `http://localhost:4000/addJob`;
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
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Job Title" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company Name" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="location" placeholder="Job Location" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="experience" placeholder="Experience" />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="description" placeholder="Job Description" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default AddJob;