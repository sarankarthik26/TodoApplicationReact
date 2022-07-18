import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import TodoAppBar from './TodoAppBar';
import WelcomeImages from './WelcomeImages';

const useStyles = makeStyles({
    welcomePage: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "todoWelcome.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: "100vh",
        width: "100%",
        margin: "0 auto"
        // filter: "blur(1px)",
    },
});

const WelcomePage = ({ UserName }) => {
    const navigate = useNavigate();
    if (UserName) { navigate("/todos") }

    const classes = useStyles();

    return (
        <div className={classes.welcomePage} >
            <TodoAppBar />
            <Box marginTop="10%" display={"flex"} flexDirection={{ xs: "column-reverse", md: "row" }} justifyContent={"center"} alignItems={"center"}>
                <Grid disableGutters sx={{ display: "flex", alignItems: "center", margin: 0 }} width={{ xs: 400, md: 400, lg: 450 }} height={{ xs: 350, md: 350, lg: 350 }} paddingRight={{ xs: "0px", md: "30px" }} lg={6}>
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
                <WelcomeImages />
            </Box>
        </div>
    );
}

export default WelcomePage;