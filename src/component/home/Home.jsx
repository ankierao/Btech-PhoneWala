import React from 'react'
import {motion} from "framer-motion";
import Founder from './Founder';
import List from './List';

const Home = () => {
  return (
    <>
    <section className='home'>
      <div>
        <motion.h1
        initial={{x:"-100%",opacity:0}}
        whileInView = {{x:0,opacity:1}}
        
        >B.TECH PhoneWala</motion.h1>
        <motion.p 
        initial={{x:"-100%",opacity:0}}
        whileInView = {{x:0,opacity:1}}
        transition ={{delay:0.3}}
        
        >Choice a phone like you choice Your Life-Partner.</motion.p>
      </div>

      <motion.a href="#list" 
      initial={{y:"-100%",opacity:0}}
      whileInView = {{y:0,opacity:1}}
      transition ={{delay:0.5}}
      >List of Mobile</motion.a>
    </section>
    <Founder/>

    <List/>

    </>
  )
}

export default Home;
