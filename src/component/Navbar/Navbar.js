import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import style from "./Navbar.module.css";
function Navbar() {
  return (
    <header className={style.header}>
      <Container fluid>
        <Row className={style.row}>
          <Col md={3} className={style.logo}>
            Poshan
          </Col>
          <Col md={9} className={style.menu}>
            <ul>
              <li>Products</li>
              <li>Contact Us</li>
              <li>Login/SignUp</li>
              <li>Cart</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Navbar;
