import React from 'react';
import DashboardNav from '../Dashboard/DashboardNav';
import AccountView from './AccountView';

const accountData = [
    {
        name:'Faisal Ahmed',
        email:'faisal@gmail.com',
        phone:'01993810091',
    },
    {
        name:'Firoj Zaman',
        email:'firoz@gmail.com',
        phone:'01993810092',
    },
    {
        name:'Jahidul Islam',
        email:'jahidul@gmail.com',
        phone:'01993810093',
    },
    {
        name:'Shafiur Rahman',
        email:'shafi@gmail.com',
        phone:'01993810094',
    },
    {
        name:'Azizul Islam',
        email:'azizul@gmail.com',
        phone:'01993810095',
    },
    {
        name:'Milton Islam',
        email:'milton@gmail.com',
        phone:'01993810096',
    },
]


    

    

const Accounts = () => {

    

    
    return (
        <section className="">
            <div>
                <DashboardNav></DashboardNav>
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <h3>Total Records: {accountData.length}</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created Time</th>
                    </thead>
                    <tbody>
                        {
                            accountData.map(account => <AccountView key={account.email} account={account}></AccountView>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Accounts;