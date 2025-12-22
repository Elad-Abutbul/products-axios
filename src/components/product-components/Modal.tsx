import React from "react";
import { Product } from "../../types";

interface ModalProps {
  product: Product;
  closeModal: () => void;
}

const Modal = ({ product, closeModal }: ModalProps) => {
  return (
    <div className="modal-container" onClick={closeModal}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(${product.image})`,
    
        }}
      >
        <p className="close" onClick={closeModal}>
          X
        </p>
        <div className="content">
          <p>Title: {product.title}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Rating Count: {product.rating.count}</p>
          <p>Rating Rate: {product.rating.rate}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
