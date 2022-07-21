import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useStore } from "../App";

const TodoAppBar = () => {

    const navigate = useNavigate();
    const { UserName } = useStore();

    return (
        <AppBar elevation={0} color="transparent" position="static"
            sx={{ backdropFilter: "blur(3px)", margin: "0 auto" }}>
            <Toolbar sx={{ marginTop: "3vh", marginBottom: "3vh", width: "80%", marginX: "auto" }}>

                <IconButton sx={{ color: "white" }} onClick={() => navigate("/")}>
                    <FactCheckOutlinedIcon />
                </IconButton>

                <Typography variant='h4' color="white" fontFamily={'Annie Use Your Telescope'} align="left" fontWeight="bold" sx={{ flexGrow: 1 }} fontSize={"3.39660vh"}>
                    To-Do List
                </Typography>

                {UserName ?
                    <Typography color={"white"} fontFamily={"poppins"} fontWeight={700}>Vanakkam {UserName}!</Typography> :

                    <Button variant='contained' onClick={() => navigate("/login")} sx={[
                        { color: "green", backgroundColor: "white" },
                        { '&:hover': { color: 'white', backgroundColor: 'green' } }
                    ]}> Login </Button>

                }

            </Toolbar>
        </AppBar>
    );
}

export default TodoAppBar;