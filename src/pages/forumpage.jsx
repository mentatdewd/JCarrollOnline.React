"use client";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import NotFoundPage from "./NotFoundPage";

const ForumPage = () => {
    const [forumThreads, setForumThreads] = useState([{ id: 0, title: '', description: '', threadCount: 0, lastPost: '', lastPostedDate: ''}]);
    const [forumTitle, setForumTitle] = useState('');
    const { forumId } = useParams();

    React.useEffect(() => {
        const loadForumThreads = async () => {
            const response = await axios.get(`http://localhost:5258/api/fora/${forumId}`);
            const newFora = response.data;

            setForumTitle(newFora.forumTitle);
            setForumThreads(newFora.forums);
        }
        loadForumThreads();
    }, [forumId]);

    return (
        <>
            <h1>{forumTitle}</h1>

            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Thread Count</th>
                        <th>Last Thread</th>
                    </tr>
                </thead>
                <tbody>
                    {console.log("Here's the returned data")}
                    {console.log(forumThreads)}
                    {forumThreads.map((item, index) => (
                        <tr key={index}>
                            <td><Link to={{
                                pathname: `/thread/${item.id}`,
                                state: { item }
                            }}>{item.title}</Link></td>

                            <td>{item.description}</td>
                            <td>{item.threadCount}</td>
                            <td>{item.lastPost}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ForumPage;