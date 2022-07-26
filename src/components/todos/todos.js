import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { AppBar, Box, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TodoDrawer from './TodoDrawer';

const Todos = ({ BodyComponent, bgNo }) => {
    const navigate = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);
    console.log(typeof (bgNo));

    return (
        <Grid>
            <Box sx={{
                width: "100%", margin: "0 auto", display: "flex", justifyContent: "center", height: "100vh", overflow: "scroll",
                backgroundImage: `url(${process.env.PUBLIC_URL + "pexelsBgTry" + (bgNo.toString()) + ".jpg"})`, backgroundSize: "cover"
            }}>
                <AppBar elevation={0} color="transparent" position="fixed"
                    sx={{ top: 0, backgroundImage: `url(${process.env.PUBLIC_URL + "pexelsBgTry" + (bgNo.toString()) + ".jpg"})`, backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                    <Toolbar sx={{ marginTop: "3vh", marginBottom: "3vh", width: "80%", marginX: "auto" }}>
                        <IconButton sx={{ "position": "fixed", "left": "5vw", "cursor": "pointer" }} onClick={() => setOpenDrawer(true)}>
                            <NavigateNextIcon />
                        </IconButton>

                        <IconButton sx={{ color: "black" }} onClick={() => navigate("/")}>
                            <FactCheckOutlinedIcon />
                        </IconButton>
                        <Typography variant='h4' color="black" fontFamily={'Annie Use Your Telescope'} align="left" fontWeight="bold" sx={{ flexGrow: 1 }} fontSize={"3.39660vh"}>
                            To-Do List
                        </Typography>
                    </Toolbar>
                </AppBar>

                <TodoDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />

                <Container sx={{ "marginTop": "17vh", "display": "flex", "justifyContent": "center", "alignItems": "flex-start" }}>  {/* 125px */}
                    {BodyComponent}
                </Container>
            </Box>
        </Grid >

    )
}

export default Todos;
