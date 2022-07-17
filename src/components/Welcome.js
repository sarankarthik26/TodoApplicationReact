import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    welcomePage: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "todoWelcome.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: "100vh",
        width: "100%",
        margin: "0 auto"
        // filter: "blur(1px)",
    }
});

const WelcomePage = ({ UserName }) => {
    const navigate = useNavigate();
    if (UserName) {
        navigate("/todos")
    }

    const classes = useStyles();


    return (
        <div className={classes.welcomePage} >
            <AppBar elevation={0} color="transparent" position="static" sx={{ backdropFilter: "blur(2px)", width: "80%", margin: "0 auto" }}>
                <Toolbar sx={{ marginTop: "3vh" }}>
                    <IconButton sx={{ color: "white" }}>
                        <FactCheckOutlinedIcon />
                    </IconButton>
                    <Typography variant='h4' color="white" fontFamily={'Annie Use Your Telescope'} align="left" fontWeight="bold" sx={{ flexGrow: 1 }}>
                        To-Do List
                    </Typography>
                    <Button variant='contained' sx={{ color: "green", backgroundColor: "white" }}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default WelcomePage;