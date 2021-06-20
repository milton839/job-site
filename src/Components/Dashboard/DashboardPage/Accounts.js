import axios from 'axios';
import React, { useEffect } from 'react';
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

    const data = {
        "refresh_token":"1000.6e55763294607bfec85b9ea428e8dc39.ecc58606f9850e31eae5e307b87a0089",
        "client_id":"1000.78W097QBVUA84L1MQ05DAJGQ1AKYHT",
        "client_secret":"9c06d2ac404eed6a10e8a098a2afff4c38518b02b9",
        "grant_type":"refresh_token"
    }

    // useEffect(()=>{
        const url = `https://accounts.zoho.com/oauth/v2/token`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json',
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(res => {
            if(res){
                console.log(res)
            }
        });
    // })

    // useEffect(() => {
    //     const url = `https://jsonplaceholder.typicode.com/users`;
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(res => {
    //         if(res){
    //             console.log(res)
    //         }
    //     });
    // },[])

    
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