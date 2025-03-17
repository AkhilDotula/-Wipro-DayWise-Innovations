import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "./redux/actions";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap"; // Import Bootstrap components

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest()); // Dispatch action to trigger saga
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Redux Saga API Fetch Example</h1>

      {/* Show Loading Indicator */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" role="status" />
        </div>
      )}

      {/* Show Error Message */}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {data && data.length > 0 ? (
          data.map((item) => (
            <Col key={item.id} md={4} className="mb-4">
              <Card className="shadow">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          !loading && <p className="text-center">No data available</p>
        )}
      </Row>
    </Container>
  );
};

export default App;

