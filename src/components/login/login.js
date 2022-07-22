import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { Grid, IconButton, Typography } from "@mui/material";
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
        flexDirection: "column",
    },
    loginForm: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
    },
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
            <Grid item sx={{ "backgroundColor": "white", minHeight: "40vh", minWidth: "34vw", padding: "4em", borderRadius: "8px" }}>

                <Typography variant='h4' color="green" fontFamily={'Annie Use Your Telescope'} fontWeight="bold"
                    sx={{ flexGrow: 1, marginBottom: "1.25em", fontSize: "xxx-large" }}>
                    <IconButton sx={{ color: "green" }}>
                        <FactCheckOutlinedIcon />
                    </IconButton>
                    To-Do List
                </Typography>

                <form onSubmit={handleLoginSubmit} className={loginClasses.loginForm}>
                    <TextField label="User Name" type="text" placeholder="Enter User Name" onChange={e => setUsername(e.target.value)} required sx={{ "marginBottom": "20px" }} />
                    <TextField label="Password" type={"password"} onChange={e => setPassword(e.target.value)} required sx={{ "marginBottom": "20px" }} />
                    <Button type="submit" variant="contained" endIcon={<LoginIcon />}
                        sx={[
                            { backgroundColor: "green", fontFamily: "'IBM Plex Sans'" },
                            { '&:hover': { color: 'white', backgroundColor: '#03a704' } }
                        ]} >Login</Button>
                </form>
                <div>
                    {error && <Typography fontFamily={"IBM Plex Sans"} color={"red"} marginTop={"20px"}>Invalid User name or Password</Typography>}
                </div>

            </Grid>

        </div>
    );
}

export default Login;