import React from 'react';

function ItemCard({ item }) {
  return (
    <div className={`item-card ${item.type}`}>
      <div className="item-header">
        <span className={`badge ${item.type}`}>{item.type.toUpperCase()}</span>
        <span className="date">{item.date}</span>
      </div>
      <h3>{item.title}</h3>
      <p className="desc">{item.description}</p>
      <div className="contact">
        <strong>Contact:</strong> {item.contact}
      </div>
    </div>
  );
}

export default ItemCard;
