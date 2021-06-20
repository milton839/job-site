import React from 'react';

const ContactView = (props) => {
    const {name, email, phone} = props.contact;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default ContactView;