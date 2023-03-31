import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillLinkedin} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div>
            <h2>BTECH PhoneWala</h2>
            <p>Their is chance that your Wife/Husband/Gf/Bf will not statisfy you but our phone will</p>
            <br />
            <em>We give attention to Singles also</em>
            <strong>All right received @btechPhonewala</strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://www.youtube.com/">
                <AiFillYoutube/>
            </a>
            <a href="https://www.instagram.com/ankie_rao/"><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/in/ankit-kumar-1a2312249/"><AiFillLinkedin/></a>
        </aside>
    </footer>
  )
}

export default Footer
