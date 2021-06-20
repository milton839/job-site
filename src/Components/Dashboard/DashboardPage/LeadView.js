import React from 'react';

const LeadView = (props) => {
    const {name, email, phone} = props.lead;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default LeadView;