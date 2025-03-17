import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;