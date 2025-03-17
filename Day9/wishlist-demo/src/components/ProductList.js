import React, { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { Button, Card, Container, Row, Col } from "react-bootstrap";

const products = [
  { id: 1, name: "Product 1", price: "$100" },
  { id: 2, name: "Product 2", price: "$150" },
  { id: 3, name: "Product 3", price: "$200" },
];

const ProductList = () => {
  const { addToWishlist } = useContext(WishlistContext);
  return (
    <Container>
      <h2 className="my-3">Products</h2>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: {product.price}</Card.Text>
                <Button variant="primary" onClick={() => addToWishlist(product)}>
                  Add to Wishlist
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;