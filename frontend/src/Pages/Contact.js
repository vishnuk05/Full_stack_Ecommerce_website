import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import '../Assests/styles/Contact.css'

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
          Welcome to the Infinite Group Help Center!
          </p>
          <p>
          Our team of experts are available 24x7 to assist you with your quiries.  Get in touch with an Expert. 
          </p>
        </div>
      </div>
      <div className="d-flex">
        <div className="container">
          <h1>Address</h1>
          <p>13/25 New Avenue</p>
          <p>New Heaven, 45Y 73J</p>
          <p>England, Great Britain</p>
        </div>
        <div className="container">
          <h1>Call center</h1>
          <p>13/25 New Avenue</p>
          <p>New Heaven, 45Y 73J</p>
          <p>England, Great Britain</p>
        </div>
        <div className="container">
          <h1>Electronic Support</h1>
          <p>13/25 New Avenue</p>
          <p>New Heaven, 45Y 73J</p>
          <p>England, Great Britain</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
