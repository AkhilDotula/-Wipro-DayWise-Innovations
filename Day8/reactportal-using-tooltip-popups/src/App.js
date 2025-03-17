import React, { useState } from "react";
import Modal from "./Modal";
import Tooltip from "./Tooltip";
import Popup from "./Popup";
import "./styles.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      <h1>React Portal Modal Demo</h1>

      {/* Modal Button */}
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {/* Popup Button */}
      <button onClick={() => setShowPopup(true)}>Show Popup</button>

      {/* Tooltip Demo */}
      <div className="tooltip-container">
        Hover me <Tooltip text="This is a tooltip!" />
      </div>

      {/* Modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2>Modal Content</h2>
        <p>This modal is rendered using React Portals.</p>
      </Modal>
   {/* Popup */}
      {showPopup && <Popup message="This is a pop-up!" onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;
