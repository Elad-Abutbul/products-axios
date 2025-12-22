import React from "react";
import { Product } from "../../types";

interface CardProps {
  product: Product;
  openModal: (product: Product) => void;
}

const Card: React.FC<CardProps> = ({ product, openModal }: CardProps) => {
  return (
    <div className="product scale-effect" onClick={() => openModal(product)}>
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div className="product-info">
        <h2 className="product-title"></h2>
        <div className="product-brief">
          <p>
            <strong>Price: {product.price} </strong>
          </p>
          <p>
            <strong>Rating:{product.rating.rate} </strong>
          </p>
          <p>
            <strong>Category: {product.category} </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
