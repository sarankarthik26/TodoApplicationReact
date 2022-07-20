import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../App";
import loginService from "./LoginService";

const Login = ({ location }) => {

    const navigate = useNavigate();
    const { UserName, setUserName } = useStore();
    if (UserName) {
        navigateWhenLoggedIn();
    }

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { loggedInUser, isError } = await loginService(username, password);
        setUserName(loggedInUser);
        setError(isError);
        if (loggedInUser) {
            navigateWhenLoggedIn();
        }
    }

    function navigateWhenLoggedIn() {
        location ? navigate(location) : navigate("/");
    }

    return (
        <form onSubmit={handleLoginSubmit}>
            <label>Username</label>
            <input type={"text"} placeholder="Enter username" onChange={e => setUsername(e.target.value)} />
            <label>Password</label>
            <input type={"password"} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            {error && <p>Login Failed</p>}
        </form>
    );
}

export default Login;