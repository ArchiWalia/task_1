import React from 'react';
import './card.css';

const Card = ({ data }) => {
    console.log(data);
  return (
    
    <div className="card">
      <p>{data.Description}</p>
      <p>{data.API}</p>
    </div>
  );
};

export default Card;