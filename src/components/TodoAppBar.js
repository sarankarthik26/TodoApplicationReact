import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const TodoAppBar = () => {

    const navigate = useNavigate();

    return (
        <AppBar elevation={0} color="transparent" position="static"
            sx={{ backdropFilter: "blur(3px)", margin: "0 auto" }}>
            <Toolbar sx={{ marginTop: "3vh", marginBottom: "3vh", width: "80%", marginX: "auto" }}>

                <IconButton sx={{ color: "white" }} onClick={() => navigate("/")}>
                    <FactCheckOutlinedIcon />
                </IconButton>

                <Typography variant='h4' color="white" fontFamily={'Annie Use Your Telescope'} align="left" fontWeight="bold" sx={{ flexGrow: 1 }}>
                    To-Do List
                </Typography>

                <Button variant='contained' onClick={() => navigate("/login")} sx={[
                    { color: "green", backgroundColor: "white" },
                    { '&:hover': { color: 'white', backgroundColor: 'green' } }
                ]}> Login </Button>

            </Toolbar>
        </AppBar>
    );
}

export default TodoAppBar;