"use client";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import NotFoundPage from "./NotFoundPage";

const ForumThreadPage = () => {
    const [forumThreads, setForumThread] = useState([{ id: 0, title: '', description: '', threadCount: 0, lastPost: '', lastPostedDate: ''}]);
    const [threadTitle, setThreadTitle] = useState('');
    const { forumId, threadId } = useParams();

    React.useEffect(() => {
        const loadForumThreads = async () => {
            const response = await axios.get(`http://localhost:5258/api/ForumThread/${forumId}/${threadId}`);
            const newFora = response.data;

            setThreadTitle(newFora.forumTitle);
            setForumThread(newFora.forums);
        }
        loadForumThreads();
    }, [threadId]);

    return (
        <>
            <h1>{threadTitle}</h1>

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
                                pathname: `/fora/${forumId}/${item.id}`,
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

export default ForumThreadPage;