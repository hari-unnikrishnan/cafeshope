import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-badge">✦ Premium Quality Beans</span>
        <h1 className="hero-title">
          Freshly Roasted <span>Coffee</span>
        </h1>
      
        <div className="hero-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">View Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
