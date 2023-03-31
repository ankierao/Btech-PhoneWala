import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/founder.jpeg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>

        <article>
          <h4>BTech PhoneWala</h4>
          <p>
            We are Btech PhoneWala. The palce where Your Trust will never Broke.
          </p>

          <p>
            We Have the 1000+ Products and 50+ Brands. Click below to see the
            Product List.
          </p>

          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Ankit Kumar</h3>
            </div>

            <p>
              I am Ankit Kumar, the founder of BTech PhoneWala. Affiliated Autenticate Product
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;