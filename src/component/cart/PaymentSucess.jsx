import React from 'react';
import {Link} from "react-router-dom";

const paymentSucess = () => {
  return (
    <section className='paymentsuccess'>
        <main>
            <h1>Order confirmed</h1>
            <p>Order Placed Successfully, You can check order status</p>
            <Link to="/myorders">Check Status</Link>
        </main>
    </section>
  )
}

export default paymentSucess
