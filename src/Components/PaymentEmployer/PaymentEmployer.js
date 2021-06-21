import React, { useContext } from 'react';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Navbar from '../Shared/Navbar/Navbar';

const PaymentEmployer = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handlePaymentSuccess = paymentId =>{
      const orderDetails = {
        ...loggedInUser,
        paymentId, 
        orderTime: new Date()
      };

      fetch('https://car-service-839.herokuapp.com/addOrder/',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          alert('Your Payment Successfully Done')
        }
      })
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container">
                <h2 className="text-center mt-3">If Employer want to post job, he or she have to pay.</h2>
                <div className="mt-5" style={{ margin:'0 auto' }}>
                    <ProcessPayment handlePayment = {handlePaymentSuccess}></ProcessPayment>
                </div>
            </div>
        </div>
    );
};

export default PaymentEmployer;