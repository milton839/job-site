import React, { useState } from 'react';

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
                </select>
                <button
                    className="ms-2 btn btn-primary"
                    onClick={()=>handleSubmit(_id)}
                    type="submit"
                    value="ok"
                >
                        Update{" "}
                </button>
            </td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default PendingJobList;