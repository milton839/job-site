import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const PendingJobList = (props) => {

    
    let {title, company, salary, jobStatus, experience, jobPostStatus, _id} = props.pending;
    // const [option,setOption] = useState(jobPostStatus)
    // console.log(option)

    const [editStatus, setEditStatus] = useState({});

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
                if(data){
                    alert('Approved')
                }
            })

    }

    const handleDelete = (id)=>{
        console.log(id)
        fetch(`https://job-hunting25.herokuapp.com/jobDelete/${id}`,{
            method:'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            alert('Job post deleted successfully');
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
                    onClick={()=>handleSubmit(_id)}
                    type="submit"
                    value="ok"
                >
                        Update{" "}
                </button>
                <button type="button" class="btn btn-danger"onClick={()=>handleDelete(_id)}><FaTrashAlt /></button>
                </div>
            </td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default PendingJobList;