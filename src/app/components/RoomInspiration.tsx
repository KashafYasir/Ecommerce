import React from 'react';
import '../styles/RoomInspiration.css';

const RoomInspiration: React.FC = () => {
  return (
    <div className="room-inspiration">
      <div className="text-section">
        <h1>50+ Beautiful rooms inspiration</h1>
        <p>Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
        <button className="explore-button">Explore More</button>
      </div>
      <div className="image-section">
        <div className="image-card">
          <img src="/roominspiration.png" alt="Room 1" width="404" height="582" />
          <div className="image-overlay">
            <span>01 — Bed Room</span>
            <h2>Inner Peace</h2>
            <button className="arrow-button">→</button>
          </div>
        </div>
        <div className="image-card">
          <img src="/ri2.png" alt="Room 2" width="372" height="486" />
        </div>
        <div className="image-card">
          <img src="/ri2.png" alt="Room 3" width="372" height="486" />
        </div>
      </div>
    </div>
  );
};

export default RoomInspiration;

