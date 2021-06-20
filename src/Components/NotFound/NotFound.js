import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <section>
            <Navbar></Navbar>
            <div className="text-center">
                <h2>Your searching item is not found</h2>
                <h4>404</h4>
            </div>
        </section>
    );
};

export default NotFound;