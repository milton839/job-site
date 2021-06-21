import React from 'react';

const AllCandidate = (props) => {
    const {name, email, phone, position, salary, company} = props.candidate;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{position}</td>
            <td>{company}</td>
            <td>{phone}</td>
            <td>{salary}</td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default AllCandidate;