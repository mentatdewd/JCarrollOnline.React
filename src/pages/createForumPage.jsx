import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from 'axios';

const CreateForumPage = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    function validateForm() {
        return title.length > 0 && description.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        var formdata = new FormData();
        //add three variable to form
        formdata.append("title", title);
        formdata.append("description", description);

        axios.post("http://localhost:5258/api/Fora/create-forum", formdata);
    }

    return (
        <>
            <h1>Create Forum</h1>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            placeholder="Title"
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            placeholder='Description'
                            onChange={(e) => {
                                setDescription(e.target.value);
                            }}
                        />
                    </Form.Group>
                    <Button block="true" size="lg" type="submit" disabled={!validateForm()}>
                        Create Forum
                    </Button>
                </Form>
            </div >
        </>
    );
};

export default CreateForumPage;