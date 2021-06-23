import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';

const ApplyForm = () => {

    const [info, setInfo] = useState({});

    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const applyData ={
            name:info.name,
            email:info.email,
            phone: info.phone,
            salary: info.salary,
            position: info.position,
            company: info.company,
        }
        console.log(applyData);

        const url = `https://job-hunting25.herokuapp.com/jobApply`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(applyData)
        })
        .then(res => {
            console.log(res);
        });
        e.preventDefault();
    }

    return (
        <section className="">
            <div>
                <Navbar />
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <div className="col-md-6">
                    <h2 className="text-brand">Submit application online</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter your Name"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter your E-mail"  required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="position" placeholder="Your Suitable Position" required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="text" className="form-control" name="company" placeholder="Company name" required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="number" className="form-control" name="phone" placeholder="Your Phone Number" required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} type="number" className="form-control" name="salary" placeholder="Your Expected Salary"  required />
                        </div>
                        <div class="d-grid gap-2">
                            <button 
                                class="btn btn-primary"
                                data-bs-toggle="modal" 
                                data-bs-target="#apply" 
                                type="submit"
                            >
                                Apply
                            </button>
                            <div className="modal fade" id="apply" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title text-center" id="exampleModalLabel">Welcome</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        You have successfully completed your job apply. 
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
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

export default ApplyForm;