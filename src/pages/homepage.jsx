//import { Button, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

const HomePage = () => (
    <>
        <div>
            <h1>Welcome to JCarrollOnline</h1>
        </div>
        <div>
            <Button>Sign up now!</Button>
        </div>
        <div>
            <Image src="./doubleblueline.gif" rounded />
        </div>
        <div>
            <h3>Latest Forum Posts</h3>
        </div>
        <div>
        <Image src="./doubleblueline.gif" rounded />
        </div>
        <div>
            <h3>Blog</h3>
        </div>
    </>
);

export default HomePage;