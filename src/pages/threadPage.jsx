"use client";

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ListGroup from 'react-bootstrap/ListGroup'
import axios from 'axios';

import ThreadPost from "../components/threadPost";

const ThreadPage = () => {

    const [posts, setPosts] = useState([{ id: 0, title: '', content: '', locked: false, createdAt: '', UpdatedAt: '', postNumber: 0, parentId: 0, rootId: 0, author: ''}]);
    const [threadTitle, setThreadTitle] = useState('');
    const { rootThreadId } = useParams();

    React.useEffect(() => {
        const loadPosts = async () => {
            const response = await axios.get(`http://localhost:5258/api/Thread/${rootThreadId}`);
            const newPosts = response.data;

            setThreadTitle(newPosts.forumTitle);
            setPosts(newPosts.forums);
        }
        loadPosts();
    }, [rootThreadId]);

    return (
        <>
            <h1>{threadTitle}</h1>

            <ListGroup as="ul">
                    {console.log("Here's the returned data")}
                    {console.log(posts)}
                    {posts.map((item, index) => (
                        <li key={index}>
                            <ThreadPost/>
                        </li>
                    ))}
            </ListGroup>
        </>
    );
};

export default ThreadPage;