import React from 'react';
import EmployeeTypeView from './EmployeeTypeView';

const employeeType = [
    { 
        type:'Premium',
        post:'30 hours per month',
        price:'$100',
     },
     { 
        type:'Standard',
        post:'20 hours per month',
        price:'$60',
     },
     { 
        type:'Basic',
        post:'10 hours per month',
        price:'$35',
     },
]

const EmployeeType = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center pb-3" style={{color:'#242A33',fontSize:'40px', fontWeight:'bold'}}>Choose Your Account</h2>
            <div className="row">
                {
                    employeeType.map(eType =><EmployeeTypeView eType={eType} key={eType.type}></EmployeeTypeView>)
                }
            </div>
        </div>
    );
};

export default EmployeeType;