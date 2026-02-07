import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: '✓',
      title: 'Premium Quality Beans',
      description: 'Sourced from the finest coffee regions worldwide'
    },
    {
      icon: '✓',
      title: 'Freshly Roasted Daily',
      description: 'Roasted in-house for maximum freshness and aroma'
    },
    {
      icon: '✓',
      title: 'Expert Baristas',
      description: 'Skilled professionals crafting perfect cups every time'
    },
    {
      icon: '✓',
      title: 'Cozy Atmosphere',
      description: 'Perfect place to relax and enjoy your favorite brew'
    }
  ];

  const specialDrinks = [
    {
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
      icon: '🥤',
      title: 'Caramel Macchiato',
      description: 'Rich espresso with vanilla syrup & caramel drizzle',
      price: '$5.99'
    },
    {
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80',
      icon: '🧊',
      title: 'Cold Brew Nitro',
      description: 'Smooth cold brew infused with nitrogen',
      price: '$6.49'
    },
    {
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=400&q=80',
      icon: '🍵',
      title: 'Matcha Latte',
      description: 'Premium matcha with steamed milk',
      price: '$5.49'
    },
    {
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
      icon: '🍫',
      title: 'Mocha Delight',
      description: 'Espresso with chocolate & whipped cream',
      price: '$5.99'
    },
    {
      image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=400&q=80',
      icon: '🌰',
      title: 'Hazelnut Latte',
      description: 'Creamy espresso with nutty hazelnut syrup',
      price: '$5.79'
    },
    {
      image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=400&q=80',
      icon: '⚪',
      title: 'White Chocolate Mocha',
      description: 'Espresso with sweet white chocolate sauce',
      price: '$6.29'
    }
  ];

  return (
    <>
      {/* Featured Section */}
      <section className="featured" id="about">
        <div className="featured-bg">
          <img 
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80" 
            alt="Coffee Background" 
          />
          <div className="featured-overlay"></div>
        </div>
        
        <div className="container">
          <div className="featured-content">
            <h2 className="featured-title">Featured</h2>
            <p className="featured-text">
              Taste the excellence of our premium quality beans, meticulously sourced from the world's most renowned coffee regions. 
              Ignite your senses with the unmatched aroma of coffee that is roasted in-house daily to guarantee peak freshness in every sip. 
              Trust our expert baristas to craft your perfect cup with precision and artistry, ensuring a gold-standard experience every time you visit. 
              Step into our cozy atmosphere and reclaim your moment of calm in a space designed for total relaxation. 
              Don't settle for an average brew—visit us today and elevate your daily coffee routine to an extraordinary craft.
            </p>
          </div>
          
          <div className="featured-features">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="featured-cta">
            <a href="#visit" className="visit-btn">Visit Us</a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="container">
          <div className="our-story">
            <div className="our-story-content">
              <h2 className="our-story-title">Our Story</h2>
              <p className="our-story-text">
                Born from a passion for exceptional coffee, our journey began with a simple mission: 
                to bring the world's finest espresso to your cup. Each bean is carefully selected 
                from sustainable farms, roasted to perfection, and blended to create our signature 
                espresso blend that delights coffee lovers everywhere.
              </p>
            </div>
            <div className="our-story-image">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80" 
                alt="Our Coffee Story" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Espresso Blend Section */}
      <section className="espresso-section">
        <div className="container">
          <div className="espresso-content">
            <div className="espresso-image">
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80" 
                alt="Espresso Blend" 
              />
            </div>
            <div className="espresso-text">
              <h2 className="espresso-title">Espresso Blend</h2>
              <h2 className="espresso-subtitle">Espresso Blend</h2>
              <p className="espresso-description">
                From the rich, chocolatey notes of our Ethiopian single origin to the smooth, 
                caramel finish of our Colombian blend, every sip tells a story of craftsmanship 
                and dedication to the art of coffee. Experience the perfect balance of flavor in every shot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Coffee Section */}
      <section className="special-coffee-section">
        <div className="container">
          <div className="special-coffee-header">
            <h2 className="special-coffee-title">☕ Special Coffee</h2>
            <p className="special-coffee-intro">
              Discover our exclusive handcrafted special coffee drinks, made with premium ingredients and love. 
              From our signature caramel macchiato to the refreshing cold brew nitro, each cup is a unique experience 
              designed to delight your senses and elevate your coffee journey.
            </p>
            <p className="special-coffee-subintro">
              Try our seasonal favorites and limited edition creations, crafted by our expert baristas using 
              the finest beans and freshest ingredients for an unforgettable coffee experience.
            </p>
          </div>
          
          <div className="special-coffee-grid">
            {specialDrinks.map((drink, index) => (
              <div className="special-drink-card" key={index}>
                <div className="special-drink-image">
                  <img src={drink.image} alt={drink.title} />
                </div>
                <div className="special-drink-content">
                  <div className="special-drink-icon">{drink.icon}</div>
                  <h3 className="special-drink-title">{drink.title}</h3>
                  <h3 className="special-drink-title-alt">{drink.title}</h3>
                  <p className="special-drink-description">{drink.description}</p>
                  <p className="special-drink-price">{drink.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
