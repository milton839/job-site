import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const PendingJobList = (props) => {

    
    let {title, company, salary, jobStatus, experience, jobPostStatus, _id} = props.pending;
    // const [option,setOption] = useState(jobPostStatus)
    // console.log(option)

    const [editStatus, setEditStatus] = useState({jobPostStatus});

    const handleStatusChange = (event)=>{
        const newStatus = {...editStatus}
        newStatus[event.target.name] = event.target.value;
        setEditStatus(newStatus);
    }
console.log(editStatus)
    
    const handleSubmit = (id) =>{
        // jobPostStatus = event.target.value;
        // console.log(jobPostStatus)
        console.log(id)

        fetch(`https://job-hunting25.herokuapp.com/update/${id}`,{
                method:'PATCH',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(editStatus)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })

    }

    const handleDelete = (id)=>{
        console.log(id)
        fetch(`https://job-hunting25.herokuapp.com/jobDelete/${id}`,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
    }
    
    return (
        <tr>
            <td>{title}</td>
            <td>{company}</td>
            <td>{jobStatus}</td>
            <td>{experience}</td>
            <td>{salary}</td>
            <td>
                <select name="jobPostStatus" onBlur={handleStatusChange}>
                    <option value={jobPostStatus}>{jobPostStatus}</option>
                    <option value="Approved">Approved</option>
                    <option value="Pending">Pending</option>
                </select>
                <div className="d-flex justify-content-center">
                <button
                    className="ms-2 btn btn-primary"
                    data-bs-toggle="modal" 
                    data-bs-target="#exampleModal"
                    onClick={()=>handleSubmit(_id)}
                    type="submit"
                    value="Approved"
                >
                        Update{" "}
                </button>
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Welcome</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You have been successful in updating the job post. 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={()=>handleDelete(_id)} 
                    data-bs-toggle="modal" 
                    data-bs-target="#delete" 
                    >
                        <FaTrashAlt />
                </button>
                <div className="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Welcome</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You have been successfully delete the job post. 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default PendingJobList;