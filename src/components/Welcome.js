import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";
import TodoAppBar from './TodoAppBar';
import WelcomeBody from './WelcomeBody';
import WelcomeImages from './WelcomeImages';

const useStyles = makeStyles({
    welcomePage: {
        backgroundImage: `url(${process.env.PUBLIC_URL + "todoWelcome.jpg"})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: "100vh",
        width: "100%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
            <Box display={"flex"} flexDirection={{ xs: "column-reverse", md: "row" }} justifyContent={"center"} alignItems={"center"} bgcolor={"rgb(0,0,0,0.5)"}>
                <Box paddingRight={{ xs: "0px", md: "30px" }}>
                    <WelcomeBody />
                </Box>
                <WelcomeImages />
            </Box>
        </div>
    );
}

export default WelcomePage;