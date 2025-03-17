import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css"; //optional styling

const Modal = ({children, onClose}) => {
    return ReactDOM.createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>{/*this prevents modal close on content click */}
                {children}
                <button onClick={onClose} className="close-button">Close</button>

            </div>

        </div>,
      document.getElementById("portal-root") //portal to be rendered here 
    );
};

export default Modal;