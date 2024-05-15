import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import NotFoundPage from "./NotFoundPage";

const ForumPage = () => {
    const [forumThreads, setForumThreads] = useState([{ id: 0, title: '', content: '', locked: false, createdAt: '', updatedAt: '', postNumber: 0, parentId: null, rootId: null}]);
    const { forumId } = useParams();

    React.useEffect(() => {
        const loadForumThreads = async () => {
            const response = await axios.get(`http://localhost:5258/api/fora/${forumId}`);
            const newFora = response.data;

            setForumThreads(newFora);
        }
        loadForumThreads();
    }, []);

    return (
        <>
            <h1>Fora</h1>

            <Table striped bordered hover className="custom-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Content</th>
                        <th>Locked</th>
                        <th>Created</th>
                        <th>Updated</th>
                        <th>Post Number</th>
                    </tr>
                </thead>
                <tbody>
                    {forumThreads.map((item, index) => (
                        <tr key={index}>
                            <td><Link to={{
                                pathname: `/fora/forumId/${item.id}`,
                                state: { item }
                            }}>{item.title}</Link></td>
                            <td>{item.content}</td>
                            <td>{item.locked}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.updatedAt}</td>
                            <td>{item.postNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

export default ForumPage;