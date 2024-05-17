// import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../components/authProvider";

const LoginPage = () => {
    const { setToken } = useAuth();
    const navigate = useNavigate();
  
    const handleLogin = () => {
      setToken("this is a test token");
      navigate("/", { replace: true });
    };
  
    setTimeout(() => {
      handleLogin();
    }, 120 * 1000);    function validateForm() {
        // return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <>
            <h1>Log in</h1>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="loginForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                        />
                        <Form.Text id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text>
                    </Form.Group>
                    <div>
                        <Form.Group className="mb-3" controlId="loginForm.ControlTextarea2">
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </div>
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
                <Link to="/register">Register as a new user</Link>
                <Link to="/forgot-password">Forgot your password?</Link>
            </div >
        </>
    );
};

export default LoginPage;

