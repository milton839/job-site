import React from 'react';

const BrandView = (props) => {
    const {image, title, description} = props.brand;
    return (
        <div className="col-md-4">
            <img className="img-fluid h-25" src={image} alt="" style={{marginLeft:'120px'}} />
            <h2 className="text-center pt-3" style={{color:'#242A33',fontSize:'25px', fontWeight:'bold'}}>{title}</h2>
            <p className="text-center">{description}</p>
            <div className="text-center">
                <button type="button" className="btn text-white fw-bold"style={{backgroundColor:'#0CAA41'}}>GET STARTED</button>
            </div>
        </div>
    );
};

export default BrandView;