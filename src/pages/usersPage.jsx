"use client";

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import api from '../components/api'

const UsersPage = () => {
    const [users, setUsers] = useState([""]);

    React.useEffect(() => {
        const loadUsers = async () => {
            try {
                const response = await api.get('http://localhost:5258/api/Users');

                setUsers(response.data);
            } catch (error) {
                // Handle error or redirect to login
            }
        }
        loadUsers();
    }, []);

    return (
        <>
            <h1>Users</h1>

            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("Here's the return users")}
                    {console.log(users)}
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default UsersPage;