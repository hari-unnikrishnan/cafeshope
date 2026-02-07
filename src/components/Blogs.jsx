import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Coffee Connoisseur',
      description: 'Discover brewing secrets and premium beans that bring out rich aroma and flavor.',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80'
    },
    {
      id: 2,
      title: 'Art of Latte',
      description: 'Learn the techniques behind creating beautiful latte art at home.',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=600&q=80'
    },
    {
      id: 3,
      title: 'Bean to Cup Journey',
      description: 'Explore the fascinating journey from coffee cherry to your morning cup.',
      image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=600&q=80'
    },
    {
      id: 4,
      title: 'Brewing Methods Guide',
      description: 'Compare different brewing methods to find your perfect cup.',
      image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80'
    },
    {
      id: 5,
      title: 'Coffee & Food Pairing',
      description: 'Discover the best food combinations to enhance your coffee experience.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80'
    },
    {
      id: 6,
      title: 'Espresso Essentials',
      description: 'Master the art of pulling the perfect espresso shot at home.',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&q=80'
    },
    {
      id: 7,
      title: 'Coffee Health Benefits',
      description: 'Explore the surprising health benefits of your daily coffee ritual.',
      image: 'https://images.unsplash.com/photo-1558857563-b371033873b8?w=600&q=80'
    },
    {
      id: 8,
      title: 'Seasonal Specials',
      description: 'Discover our limited edition seasonal coffee drinks and flavors.',
      image: 'https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=600&q=80'
    }
  ];

  return (
    <section className="blogs" id="blog">
      <div className="container">
        <div className="blogs-header">
          <h2 className="blogs-title">LATEST BLOGS</h2>
          <p className="blogs-subtitle">Discover Stories, Tips & Updates From Our Café</p>
        </div>
        
        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <h3 className="blog-title-alt">{blog.title}</h3>
                <p className="blog-excerpt">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
