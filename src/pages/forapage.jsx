"use client";

import React, { useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';

const ForaPage = () => {
    const [fora, setFora] = useState([{ id: 0, title: '', description: '', threadCount: 0, lastThreadPost: '' }]);

    React.useEffect(() => {
        const loadFora = async () => {
            const response = await axios.get("http://localhost:5258/api/Fora");
            const newFora = response.data;

            setFora(newFora);
        }
        loadFora();
    }, []);

    return (
        <>
            <h1>Fora</h1>

            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Thread Count</th>
                        <th>Last Thread Post</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("Here's the return fora")}
                    {console.log(fora)}
                    {fora.map((item, index) => (
                        <tr key={index}>
                            <td><Link to={{
                                pathname: `/fora/${item.id}`,
                                state: { item }
                            }}>{item.title}</Link></td>
                            <td>{item.id}</td>
                            <td>{item.description}</td>
                            <td>{item.threadCount}</td>
                            <td>{item.lastThreadPost}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ForaPage;