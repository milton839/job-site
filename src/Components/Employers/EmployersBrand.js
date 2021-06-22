import React from 'react';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import BrandView from './BrandView';

const brandData = [
    {
        image:image1,
        title:'Reach engaged, quality talent',
        description:'The majority of U.S. Glassdoor users are job seekers actively looking for a new job.1',
    },
    {
        image:image2,
        title:'Influence authentic brand story',
        description:'3 out of 4 users are more likely to apply to an open job if the employer is active on Job Hunting.1',
    },
    {
        image:image3,
        title:'Listen for actionable insights',
        description:'Monitor brand analytics and reporting to drive improvements in the employee experience.',
    },
]

const EmployersBrand = () => {
    return (
        <div className="" style={{backgroundColor:'#E8EAED',padding:'80px 0'}}>
            <div className="container">
                <div className="text-center">
                    <h2 style={{color:'#242A33',fontSize:'40px', fontWeight:'bold',padding:'0 80px'}}>Ready to join the conversation that's shaping your employer brand?</h2>
                    <p className="fs-3" style={{padding:'0 100px'}}>Go beyond reviews and boost talent acquisition with an active, compelling presence on Job Hunting</p>
                </div>
                <div className="row">
                        {
                            brandData.map(brand =><BrandView brand={brand} key={brand.image}></BrandView> )
                        }
                </div>
            </div>
        </div>
    );
};

export default EmployersBrand;