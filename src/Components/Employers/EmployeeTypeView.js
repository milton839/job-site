import React from 'react';
import { Link } from 'react-router-dom';

const EmployeeTypeView = (props) => {
    const {type, post, price} = props.eType;
    return (
        <div className="col-md-4">
            <div class="card p-5 text-center" style={{width: '22rem'}}>
                <div className="">
                    <h2 className="text-uppercase fw-bold">{type}</h2>
                    <p className="fs-3">{post}</p>
                    <h3>{price}</h3>
                    <Link to={`/payment/${price}`}>
                        <button className="btn btn-success">Select account</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EmployeeTypeView;