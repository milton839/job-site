import React from 'react';
import AdminNav from '../Admin/AdminNav';

const PendingJob = () => {
    return (
        <div>
            <div>
                <AdminNav />
            </div>
            <div className="text-center" style={{margin:'20px 40px 40px 290px'}}>
                <h2>pending</h2>
            </div>
        </div>
    );
};

export default PendingJob;