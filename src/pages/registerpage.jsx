"use client";

import { Button, Form, FormGroup } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { validateEmail } from "../utils/validate-email";

const RegisterPage = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false,
    });
    const [confirmPassword, setConfirmPassword] = useState({
        value: "",
        isTouched: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        var formdata = new FormData();
        //add three variable to form
        formdata.append("userName", userName);
        formdata.append("emailAddress", email);
        formdata.append("password", password.value);

        axios.post("http://localhost:5258/api/authentication/register", formdata)
        alert("Account created!");
        clearForm();
    };
    const getIsFormValid = () => {
        return (
            userName &&
            validateEmail(email) &&
            password.value.length >= 8 &&
            confirmPassword.value === password.value
        );
    };
    const clearForm = () => {
        setUserName("");
        setEmail("");
        setPassword({
            value: "",
            isTouched: false,
        });
    };
    return (
        <>
            <h1>Register</h1>
            <h3>Create a new account</h3>

            <Form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                        value={userName}
                        type="text"
                        id="userNameText"
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                        placeholder="User name"
                    />
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        type="text"
                        id="emailText"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder="Email address"
                    />
                    <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={(e) => {
                            setPassword({ ...password, value: e.target.value });
                        }}
                        onBlur={() => {
                            setPassword({ ...password, isTouched: true });
                        }}
                        placeholder="Password"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                    <Form.Label htmlFor="inputPassword5">Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        id="confirmInputPassword5"
                        aria-describedby="confirmPasswordHelpBlock"
                        onChange={(e) => {
                            setConfirmPassword({ ...confirmPassword, value: e.target.value });
                        }}
                        onBlur={() => {
                            setPassword({ ...confirmPassword, isTouched: true });
                        }}
                        placeholder="Password"
                    />
                    <Form.Text id="confirmPasswordHelpBlock" muted>
                        Confirm password help text
                    </Form.Text>
                </FormGroup>
                <Button type="submit" disabled={!getIsFormValid()}>
                    Create Account
                </Button>
            </Form>
        </>
    );
};

export default RegisterPage;