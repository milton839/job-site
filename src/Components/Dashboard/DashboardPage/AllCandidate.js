import React from 'react';

const AllCandidate = (props) => {
    const {name, email, phone, position, salary} = props.candidate;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{position}</td>
            <td>{phone}</td>
            <td>{salary}</td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default AllCandidate;