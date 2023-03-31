import React from 'react'
import { Link } from 'react-router-dom';

import mobile1 from "../../assets/mobile1.jpg";
import mobile2 from "../../assets/mobile2.jpg";
import mobile3 from "../../assets/mobile3.jpg";
import mobile4 from "../../assets/mobile4.jpg";
import mobile5 from "../../assets/mobile5.jpg";
import mobile6 from "../../assets/mobile6.jpg";




const CartItem = ({value,title,img,increment,decrement}) => (
  <div className='cartItem'>
  <div>
    <h4>{title}</h4>
    <img src={img} alt="Item"/>
  </div>

  <div>
    <button onClick={decrement
    }>-</button>
    <input type="number" readOnly value={value} />
    <button onClick={increment
    }>+</button>
  </div>
  </div>
  
)

const Cart = () => {

    const increment = (item) => {};
    const decrement = (item) => {};

  return (
    <section className='cart'>
        <main>
            <CartItem title ={"SAMSUNG GALAXY S23 ULTRA 5G"} img={mobile1} value = {0} increment ={() =>increment(1)}
            decrement ={() =>decrement(1)}
            />
            <CartItem title ={"ONEPLUS 11R 5G"} img={mobile2} value = {0} increment ={() =>increment(2)}
            decrement ={() =>decrement(2)}
            />
            <CartItem title ={"GOOGLE PIXEL 7 PRO"} img={mobile3} value = {0} increment ={() =>increment(3)}
            decrement ={() =>decrement(3)}
            />
            <CartItem title ={"APPLE IPHONE 14"} img={mobile4} value = {0} increment ={() =>increment(4)}
            decrement ={() =>decrement(4)}
            />
            <CartItem title ={"APPLE IPHONE 14 PRO"} img={mobile5} value = {0} increment ={() =>increment(5)}
            decrement ={() =>decrement(5)}
            />
            <CartItem title ={"OPPO RENO 8 PRO"} img={mobile6} value = {0} increment ={() =>increment(6)}
            decrement ={() =>decrement(6)}
            />
            <article>
            <div>
            <h4>Sub Total</h4>
                <p>₹{2000}</p>
            </div>
            <div>
            <h4>Tax</h4>
                <p>₹{2000*0.18}</p>
            </div>
            <div>
            <h4>Shipping Charges</h4>
                <p>₹{200}</p>
            </div>
            <div>
            <h4>Total</h4>
                <p>₹{2000 + 
                2000*0.18 + 200}</p>
            </div>
            <Link to="/shipping" className='checkout'>Checkout</Link>
                
            </article>
            
        </main>
    </section>
  )
}

export default Cart
