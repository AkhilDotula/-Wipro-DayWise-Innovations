import React from "react";
import { Alert } from "react-bootstrap";

const Confirmation = ({ message }) => {
  return (
    <Alert variant="success" className="text-center my-4">
      <h2>Appointment Confirmed!</h2>
      <p>{message}</p>
    </Alert>
  );
};

export default Confirmation;
