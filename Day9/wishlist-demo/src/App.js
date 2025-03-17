import React from "react";
import { WishlistProvider } from "./context/WishlistContext";
import ProductList from "./components/ProductList";
import Wishlist from "./components/WishList";
import { Container, Navbar, Nav } from "react-bootstrap";

const App = () => {
  return (
    <WishlistProvider>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#">Wishlist Demo</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#wishlist">Wishlist</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container>
        <ProductList />
        <Wishlist />
      </Container>
    </WishlistProvider>
  );
};

export default App;