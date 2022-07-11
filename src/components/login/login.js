import { useState } from "react";
import loginService from "./LoginService";

const Login = ({ setIsAuthenticated }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { isAuthenticated, isError } = await loginService(username, password);
        setIsAuthenticated(isAuthenticated);
        setError(isError);
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