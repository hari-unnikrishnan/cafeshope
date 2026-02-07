import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
      title: 'Espresso',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
      title: 'Americano',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
      title: 'Cappuccino',
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80',
      title: 'Latte',
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80',
      title: 'Macchiato',
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80',
      title: 'Mocha',
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400&q=80',
      title: 'Flat White',
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80',
      title: 'Affogato',
    }
  ];

  return (
    <section className="categories" id="menu">
      <div className="container">
        <h2 className="section-title">TOP CATEGORIES</h2>
        <p className="section-subtitle">Explore The Recent Most Bought Drinks This Week</p>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div className="category-card" key={category.id}>
              <div className="category-image">
                <img src={category.image} alt={category.title} />
               
              </div>
              <div className="cat-card-content">
                <h3 className="category-title">{category.title}</h3>
                <button className="view-more-btn">View More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
