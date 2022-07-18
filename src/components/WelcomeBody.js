import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const WelcomeBody = () => {

    const navigate = useNavigate();

    return (
        <Grid disableGutters sx={{ display: "flex", alignItems: "center", margin: 0 }}
            width={{ xs: 400, md: 400, lg: 450 }} height={{ xs: 350, md: 350, lg: 350 }}
            paddingRight={{ xs: "0px", md: "30px" }} lg={6}>
            <Typography variant='h5'>
                Welcome to <Typography variant='h3' display={"inline"} fontFamily={"Annie Use Your Telescope"}> To-Do List!</Typography>
                <Typography variant='h6' marginTop={{ xs: "4vh", md: "5vh" }} marginBottom={{ xs: "3vh", md: "5vh" }} textAlign={"left"}>
                    A friendly companion to help you keep track of all your todos and lists. Use To-do list to stay organised and manage your day-to-day like a champ!
                </Typography>
                <Button variant='contained' onClick={() => navigate("/login")} endIcon={<KeyboardArrowRightIcon />} sx={[
                    { color: "white", backgroundColor: "green" },
                    { '&:hover': { color: 'green', backgroundColor: 'white' } }
                ]}> Start your journey </Button>
            </Typography>
        </Grid>
    );
}

export default WelcomeBody;