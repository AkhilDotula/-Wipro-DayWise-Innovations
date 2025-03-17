import React, { useState } from "react";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false); // Ensure boolean state

  return (
    <div>
      <h1>React Portal Example</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Portal Modal</h2>
          <p>This modal is rendered outside the root DOM hierarchy.</p>
        </Modal>
      )}
    </div>
  );
};

export default App;
