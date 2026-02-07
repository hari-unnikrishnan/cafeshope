import React from 'react';

const MilkShakes = ({ id }) => {
  const products = [
    {
      id: 1,
      title: 'Mocha Shake',
      price: '$20.00',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
    {
      id: 2,
      title: 'Lavender Shake',
      price: '$22.00',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
    {
      id: 3,
      title: 'Caramel Shake',
      price: '$18.00',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
    {
      id: 4,
      title: 'Chocolate Shake',
      price: '$20.00',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    },
    {
      id: 5,
      title: 'Strawberry Shake',
      price: '$19.00',
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&q=80'
    }
  ];

  return (
    <section className="milkshakes" id={id}>
      <div className="milkshakes-bg">
        
        <div className="milkshakes-overlay"></div>
      </div>
      
      <div className="container">
        <div className="milkshakes-header">
          <h2 className="section-title-light">TOP MILK SHAKES</h2>
          <p className="section-subtitle-light">Our Most Popular Milkshakes This Season</p>
        </div>
        
        <div className="milkshakes-grid">
          {products.map((product) => (
            <div className="milkshake-card" key={product.id}>
              <div className="milkshake-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="milkshake-content">
                <h3 className="milkshake-title">{product.title}</h3>
                <h3 className="milkshake-title-alt">{product.title}</h3>
                <p className="milkshake-price">{product.price}</p>
                <button className="milkshake-buy-btn">BUY NOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MilkShakes;
