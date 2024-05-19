import {Button} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        navigate("/", { replace: true });
      }
        return (
        <>
            <h1>Log out</h1>
            <div>
                <Button onClick={logout}>Log Out</Button>
            </div>
        </>
    )
}

export default LogoutPage;

