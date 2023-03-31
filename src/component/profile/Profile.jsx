import React from 'react';
import {motion} from "framer-motion";
import me from "../../assets/founder.jpeg"
import { Link } from 'react-router-dom';
import {RxDashboard} from "react-icons/rx"



const Profile = () => {

    const options = {
      intial: {
        y:"-100%",
        opacity:0,
      }, animate: {
        y:0,
        opacity:1,
      }
    };

  return (
    <section className='profile'> 
        <main>
            <motion.img src ={me} alt="User" {...options}/>
            <motion.h5 {...options} transition={{delay:0.3}}>
            Ankit kumar
            </motion.h5>

            <motion.div {...options} transition={{delay:0.5}}>
              <Link to="/admin/dashboard" style={{
                borderRadius:0,
                backgroundColor:"rgb(40,40,40)"
              }}><RxDashboard/>Dashboard</Link>
            </motion.div>

            <motion.div intial={{x:"-100vw",opacity:0,}}
            animate={{x:0,opacity:1}}>
              <Link to="/myorders">Orders</Link>
            </motion.div>

            <motion.button intial={{x:"-100vw",opacity:0,}}
            animate={{x:0,opacity:1}}
            transition ={{delay:0.3}}>
              Logout
            </motion.button>


        </main>
    </section>
  )
}

export default Profile
