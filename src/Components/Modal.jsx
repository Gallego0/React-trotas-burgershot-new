import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Modal({ title, content, allergens, onClose }) {
  return (
    <div className="modal" style={{ zIndex: 1000 }}>
      <div onClick={onClose} className="overlay"></div>
      <div className="modal-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="allergens">
          <strong>Alergenos:</strong>
          {Array.isArray(allergens) && allergens.length > 0 ? (
            allergens.map((allergen, index) => (
              <FontAwesomeIcon key={index} icon={allergen} className="allergen-icon" />
            ))
          ) : (
            <span>No allergens available</span>
          )}
        </div>
        <button className="close-modal" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;

