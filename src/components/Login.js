import React from "react";
// Import for react router
import { Link } from "react-router-dom";
// Imports from Bootstrap and CSS
import "../styles/login.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Login = ( {handleClick} ) => {
  return (
    <div className="login">
      <Form style={{ width: "40vh" }}>
        <h1 style={{ margin: "0 auto", marginBottom:"10px" }}>Sign-In</h1>
        <Row>
          <Col
            style={{
              marginBottom: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Form.Control onSubmit={handleClick} placeholder="First name" />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              marginBottom: "10px",
              marginRight: "5px",
              marginLeft: "5px",
            }}
          >
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
      <Form>
        <Button type="submit">
          <Link
            to="/MonthlyView"
            style={{ textDecoration: "none", color: "white" }}
          >
            Sign In
          </Link>
        </Button>
      </Form>
    </div>
  );
};

export default Login;
