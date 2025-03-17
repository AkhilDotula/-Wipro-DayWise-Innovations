import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  return (
    <Container>
      <h2 className="my-3">Wishlist</h2>
      <Row>
        {wishlistItems.length === 0 ? (
          <p>No items in Wishlist</p>
        ) : (
          wishlistItems.map((item) => (
            <Col md={4} key={item.id}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: {item.price}</Card.Text>
                  <Button variant="danger" onClick={() => removeFromWishlist(item.id)}>
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default Wishlist;