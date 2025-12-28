import React from "react";
import { Product } from "../../types";
import { MODAL_CONSTANTS } from "../../constants/Modal";

interface ModalProps {
  product: Product;
  closeModal: () => void;
}

const Modal = ({ product, closeModal }: ModalProps) => {
  const { image, title, category, price, rating } = product;
  return (
    <div className="modal-container" onClick={closeModal}>

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="modal-header">
        <p className="close" onClick={closeModal}>
          {MODAL_CONSTANTS.X}
        </p>
        </div>
        <div className="modal-content">
          <p>
            {MODAL_CONSTANTS.TITLE} {title}
          </p>
          <p>
            {MODAL_CONSTANTS.CATEGORY} {category}
          </p>
          <p>
            {MODAL_CONSTANTS.PRICE} {price}
          </p>
          <p>
            {MODAL_CONSTANTS.RATING_COUNT} {rating.count}
          </p>
          <p>
            {MODAL_CONSTANTS.RATING_RATE} {rating.rate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
