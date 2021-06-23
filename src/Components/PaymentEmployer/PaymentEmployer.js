import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Navbar from '../Shared/Navbar/Navbar';

const PaymentEmployer = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const {employeepath} = useParams();

    const handlePaymentSuccess = paymentId =>{
      const employeeDetails = {
        ...loggedInUser,
        paymentId, 
        paymentTime: new Date()
      };

      // fetch('/',{
      //   method:'POST',
      //   headers:{
      //     'Content-Type':'application/json',
      //   },
      //   body:JSON.stringify(orderDetails)
      // })
      // .then(res => res.json())
      // .then(data => {
      //   if(data){
      //     alert('Your Payment Successfully Done')
      //   }
      // })
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container mt-5">
              <div className="row m-auto d-flex justify-content-center">
                <div class="card" style={{width: '50rem'}}>
                    <div class="card-body">
                      <h2 className="text-center">You have to pay first</h2>
                      <h2 className="text-center mt-3 pb-3" style={{color:'#242A33',fontSize:'25px', fontWeight:'bold'}}>Stripe Payment Method</h2>
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-6 ">
                          <ProcessPayment handlePayment = {handlePaymentSuccess}></ProcessPayment>
                        </div>
                        <h2 className="text-center">If you already pay for your account <Link to={`/${employeepath}`}>Login</Link></h2>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default PaymentEmployer;