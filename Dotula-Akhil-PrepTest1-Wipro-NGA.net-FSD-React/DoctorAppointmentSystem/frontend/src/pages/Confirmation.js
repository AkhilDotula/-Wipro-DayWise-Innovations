import React from "react";
import { Container } from "react-bootstrap";
import Confirmation from "../components/Confirmation";
const ConfirmationPage = () => {
  return (
    <Container className="text-center my-5">
      <Confirmation message="Your appointment has been successfully booked." />
    </Container>
  );
};

export default ConfirmationPage;
