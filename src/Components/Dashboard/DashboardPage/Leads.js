import React from 'react';
import DashboardNav from '../Dashboard/DashboardNav';
import LeadView from './LeadView';

const leadsData = [
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
]

const Leads = () => {
    return (
        <section className="">
            <div>
                <DashboardNav></DashboardNav>
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <h3>Total Records: {leadsData.length}</h3>
                <table className="table table-striped table-hover">
                    <thead>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Created Time</th>
                    </thead>
                    <tbody>
                        {
                            leadsData.map(lead => <LeadView lead={lead} key={lead.email}></LeadView>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Leads;