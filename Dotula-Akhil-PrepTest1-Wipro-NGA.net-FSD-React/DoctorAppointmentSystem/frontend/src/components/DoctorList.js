import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/api/doctors")
      .then(response => setDoctors(response.data))
      .catch(error => console.error("Error fetching doctors:", error));
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">Available Doctors</h2>
      <Row>
        {doctors.map((doctor) => (
          <Col md={4} key={doctor.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{doctor.specialty}</Card.Subtitle>
                <Button variant="primary" onClick={() => navigate(`/booking/${doctor.id}`)}>Book Appointment</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DoctorList;
