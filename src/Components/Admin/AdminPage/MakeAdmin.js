

import React, { useState } from 'react';
import AdminNav from '../Admin/AdminNav';

const MakeAdmin = () => {

    const [info, setInfo] = useState([]);
    const handleBlur = (event) =>{
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }
    console.log(info);
    const handleSubmit = (e) => {
        const adminData ={
            name: info.name,
            email: info.email,
        }

        const url = `https://job-hunting25.herokuapp.com/addAdmin`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(adminData)
        })
        .then(res => {
            console.log(res);
        });
        e.preventDefault();
    }
    
    return (
        <div>
            <div>
                <AdminNav />
            </div>
            <div className="text-center col-md-6 mt-5 py-5" style={{margin:'20px 20px 40px 300px', backgroundColor: "#F4FDFB"}}>
                <h5 className="text-brand mb-2">Make Admin</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Name" required/>
                    </div>
                    <div className="form-group">
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter Email" required/>
                    </div>
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        data-bs-toggle="modal" 
                        data-bs-target="#admin"
                    >
                        Make Admin
                    </button>
                        <div className="modal fade" id="admin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title text-center" id="exampleModalLabel">Welcome</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    You have successfully create an admin. 
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
    );
};

export default MakeAdmin;