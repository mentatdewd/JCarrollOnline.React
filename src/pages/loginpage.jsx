// import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../components/authProvider"
import { useState } from "react";

const LoginPage = () => {
    const { setToken } = useAuth();
    const {setRefreshToken} = useAuth();

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (token) => {
        setToken(token.token);
        setRefreshToken(token.refreshToken);
        navigate("/", { replace: true });
    };

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        var formdata = new FormData();
        //add three variable to form
        formdata.append("emailAddress", email);
        formdata.append("password", password);

        axios.post("http://localhost:5258/api/authentication/login", formdata)
        .then((res) => handleLogin(res.data));
    }

    return (
        <>
            <h1>Log in</h1>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                        <Form.Control
                            type="password"
                            id="inputPassword5"
                            aria-describedby="passwordHelpBlock"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
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
                    <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
                <div>
                    <Link to="/register">Register as a new user</Link>
                </div>
                <div>
                    <Link to="/forgot-password">Forgot your password?</Link>
                </div>
            </div >
        </>
    );
};

export default LoginPage;

