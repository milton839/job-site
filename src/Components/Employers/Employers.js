import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import EmployeeType from './EmployeeType';
import EmployersBanner from './EmployersBanner';
import EmployersBrand from './EmployersBrand';

const Employers = () => {
    return (
        <div>
            <Navbar />
            <EmployersBanner />
            <EmployeeType />
            <EmployersBrand />
        </div>
    );
};

export default Employers;