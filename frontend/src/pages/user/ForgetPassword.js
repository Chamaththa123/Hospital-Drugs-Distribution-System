import React from "react";
import "./ForgetPassword.css";
import Auth from "../../components/Layout/Auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ForgetPassword() {
  return (
    <div className="login-container">
      <div className="column1F">
        <Auth />
      </div>
      <div className="column2F">
        <h3 className="forget-password-F">
          <b>Reset Password</b>
        </h3>
        <Form className="formF">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              style={{ borderRadius: "5px", width: "120%", fontSize: "14px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Employee No</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Employee No"
              style={{ borderRadius: "5px", width: "120%", fontSize: "14px" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter New Password"
              style={{ borderRadius: "5px", width: "120%", fontSize: "14px" }}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{
              borderRadius: "5px",
              width: "120%",
              backgroundColor: "#114DA9",
            }}
          >
            Reset Password
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default ForgetPassword;
