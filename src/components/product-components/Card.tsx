import React from 'react';
import { Product } from '../../types';

interface CardProps {
}

const Card: React.FC<CardProps> = () => {

  return (
    <div className='product scale-effect'>
      <div className='product-image'>
        <img />
      </div>
      <div className='product-info'>
        <h2 className='product-title'></h2>
        <div className='product-brief'>
          <p><strong>Price: </strong></p>
          <p><strong>Rating: </strong></p>
          <p><strong>Category: </strong></p>
        </div>
      </div>
    </div>
  );
};

export default Card;
