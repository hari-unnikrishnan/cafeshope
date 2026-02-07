import React from 'react';

const Media = () => {
  const mediaContent = [
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
      title: 'Our Coffee Making Process',
      duration: '3:45'
    },
    {
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=600&q=80',
      title: 'Barista Training Tips',
      duration: '5:20'
    },
    {
      type: 'gallery',
      image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80',
      title: 'Coffee Beans Collection'
    },
    {
      type: 'gallery',
      image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?w=600&q=80',
      title: 'Latte Art Gallery'
    },
    {
      type: 'gallery',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80',
      title: 'Cozy Café Ambiance'
    },
    {
      type: 'gallery',
      image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80',
      title: 'Seasonal Specials'
    }
  ];

  return (
    <section id="Media" className="media-section">
      <div className="media-container">
        <h2 className="media-title">Media</h2>
        <p className="media-subtitle">Check out our latest videos and photo galleries</p>
        
        <div className="media-grid">
          {mediaContent.map((item, index) => (
            <div key={index} className={`media-item ${item.type}`}>
              <div className="media-thumbnail">
                <img src={item.type === 'video' ? item.thumbnail : item.image} alt={item.title} />
                {item.type === 'video' && (
                  <div className="play-button">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                )}
                {item.duration && <span className="duration">{item.duration}</span>}
              </div>
              <h3 className="media-item-title">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;
