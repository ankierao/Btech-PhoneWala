import React from 'react';
import {motion} from "framer-motion";
import backgrdVideo from "../../assets/backgroundV.mp4"



const Contact = () => {
  return (
    <section className='contact'>

        <motion.form 
        initial={{x:"-100vw",opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{delay:0.3}}>
        <div className='top'>
        <h2>Contact Us</h2>
        <video autoPlay loop muted >
            <source src={backgrdVideo
            } type = 'video/mp4'/>
        </video>
        </div>
            
            
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email' />

            <textarea placeholder='Message' cols="30" rows="10"></textarea>
            <button type='submit'>Send</button>
        </motion.form>
        <motion.div className='formBorder'>
            <motion.div>

            </motion.div>
        </motion.div>
        {/* <video autoPlay loop muted >
            <source src={backgrdVideo
            } type = 'video/mp4'/>
        </video> */}
    </section>
    
  )
}

export default Contact
