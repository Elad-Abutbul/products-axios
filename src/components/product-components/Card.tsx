import React from "react";
import { Product } from "../../types";

interface CardProps {
  product: Product;
  openModal: (product: Product) => void;
}

const Card: React.FC<CardProps> = ({ product, openModal }: CardProps) => {
  const { image, price, rating, category } = product;
  return (
    <div className="product scale-effect" onClick={() => openModal(product)}>
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h2 className="product-title"></h2>
        <div className="product-brief">
          <p>Price: {price}</p>
          <p>Rating:{rating.rate}</p>
          <p>Category: {category} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
