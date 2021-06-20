import React from 'react';

const DealView = (props) => {
    const {name, email, phone} = props.deal;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default DealView;