import { Typography } from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../App";
import loginService from "./LoginService";

const useLoginStyles = makeStyles({
    loginPage: {
        minHeight: "100vh",
        backgroundImage: `url(${process.env.PUBLIC_URL + "todoWelcome.jpg"})`,
        backgroundSize: "cover",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    }
})

const Login = ({ location }) => {

    const loginClasses = useLoginStyles();
    const navigate = useNavigate();
    const { UserName, setUserName } = useStore();


    useEffect(() => {
        if (UserName) { navigateWhenLoggedIn(); }
    }, [UserName])

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const { loggedInUser, isError } = await loginService(username, password);
        setUserName(loggedInUser);
        setError(isError);
    }

    function navigateWhenLoggedIn() {
        location ? navigate(location) : navigate("/");
    }

    return (
        <div className={loginClasses.loginPage}>
            <form onSubmit={handleLoginSubmit} className={loginClasses.loginForm}>
                <TextField label="User Name" type="text" placeholder="Enter User Name" onChange={e => setUsername(e.target.value)} required />
                <TextField label="Password" type={"password"} onChange={e => setPassword(e.target.value)} required />
                <Button type="submit" variant="contained">Login</Button>
            </form>
            <div>
                {error && <Typography>Login Failed</Typography>}
            </div>

        </div>
    );
}

export default Login;