import React from 'react';

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
       <div className="coffee-top-wrapper">
        <div className="coffee-bg">
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
            alt="coffee"
          />
          <div className="coffee-overlay"></div>
        </div>

        <div className="coffee-top">
          <h2 className="logo">
            ☕ <span>Coffee Shop</span>
          </h2>
          <p className="tagline">Brewing Happiness Since 2020</p>
          <p className="subtitle">
            Experience the finest coffee crafted with passion and served with love.
          </p>

          <div className="contact-box">
            <h3>Contact Us</h3>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
