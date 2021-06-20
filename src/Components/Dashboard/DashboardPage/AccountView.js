import React from 'react';

const AccountView = (props) => {
    const {name, email, phone} = props.account;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{(new Date()).getFullYear()}</td>
        </tr>
    );
};

export default AccountView;