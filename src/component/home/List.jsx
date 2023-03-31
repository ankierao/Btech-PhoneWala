import React from 'react'
import ListCard from './ListCard'
import mobile1 from "../../assets/mobile1.jpg";
import mobile2 from "../../assets/mobile2.jpg";
import mobile3 from "../../assets/mobile3.jpg";
import mobile4 from "../../assets/mobile4.jpg";
import mobile5 from "../../assets/mobile5.jpg";
import mobile6 from "../../assets/mobile6.jpg";




const List = () => {

    const addToCartHandler = (itemNum) => {};
  return (
    
        <section id = "list">
            <h1>LIST OF MOBILES</h1>
            <div className='firstrow'>
                <ListCard itemNum={1}mobileSrc={mobile1} price={124999.00}title="Samsung Galaxy S23 Ultra 5G" 
                handler={addToCartHandler}
                delay ={0.1}
                />
                <ListCard itemNum={2}mobileSrc={mobile2} price={56999}title="OnePlus 11R 5G" 
                handler={addToCartHandler}
                delay ={0.3}
                />
                <ListCard itemNum={3}mobileSrc={mobile3} price={80999}title="Google Pixel 7 Pro" 
                handler={addToCartHandler}
                delay ={0.5}
                />
            </div>
            <div className='secondrow'>
            <ListCard itemNum={4}mobileSrc={mobile4} price={72999}title="Apple iPhone 14" 
                handler={addToCartHandler}
                delay ={0.1}
                />
                <ListCard itemNum={5}mobileSrc={mobile5} price={122999}title="Apple iPhone 14 Pro" 
                handler={addToCartHandler}
                delay ={0.3}
                />
                <ListCard itemNum={6}mobileSrc={mobile6} price={45999}title="Oppo Reno 8 Pro" 
                handler={addToCartHandler}
                delay ={0.5}
                />
            </div>
        </section>
    
  )
}

export default List
