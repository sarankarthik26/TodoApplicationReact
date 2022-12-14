import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { default as ExpandMore, default as ExpandMoreIcon } from '@mui/icons-material/ExpandMore';
import { Card, Grid, Typography } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { urls } from '../../urls';
import { getAvatar } from './list';

export const Categories = [
    {
        value: 'TODOS',
        label: 'Todos'
    },
    {
        value: 'SHOPPING',
        label: 'Shopping',
    },
    {
        value: 'PROJECT',
        label: 'Project',
    },
];

const NewTodoPage = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("TODOS");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        const payload = { "todoName": name, "category": category, "description": description }
        axios.post(urls.springUrl + "/todos", payload, { headers: { Authorization: sessionStorage.getItem("token") } })
            .then((response) => {
                setError(null);
                setSuccess(true);
            })
            .catch(e => {
                setError(e.response.data.message);
                setSuccess(false);
            })
    }

    const handleSnackBarClose = () => {
        setSuccess(false);
        navigate("/todos");
    }
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const [expanded, setExpanded] = React.useState(true);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Grid item sx={{ "backgroundColor": "white", minHeight: "40vh", minWidth: "34vw", padding: "4em", borderRadius: "8px", maxWidth: "900px" }}>
            <Box>
                <form onSubmit={handleCreateSubmit} style={{ "display": "flex", "flexDirection": 'column' }}>
                    <TextField label="Title" type="text" placeholder="Enter Todo name" onChange={e => setName(e.target.value)}
                        required sx={{ "marginBottom": "20px" }} autoComplete="off" error={error ? true : false} helperText={error} />
                    <TextField select label="Category" value={category} onChange={(e) => setCategory(e.target.value)} required sx={{ "marginBottom": "20px" }}>
                        {Categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField multiline label="Describe your todo" onChange={e => setDescription(e.target.value)} sx={{ "marginBottom": "20px" }} autoComplete="off" />
                    <Button type="submit" variant="contained" endIcon={<AddIcon />}
                        sx={[
                            { backgroundColor: "green", fontFamily: "'IBM Plex Sans'" },
                            { '&:hover': { color: 'white', backgroundColor: '#03a704' } }
                        ]} >Create</Button>
                </form>
            </Box>

            <Snackbar open={success} autoHideDuration={3000} onClose={handleSnackBarClose}>
                <Alert onClose={handleSnackBarClose} severity="success" sx={{ width: '100%' }}>
                    Todo successfully Added!
                </Alert>
            </Snackbar>


            <Box paddingTop={"20px"}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={getAvatar(category)}
                        action={
                            <ExpandMore expand={expanded} onClick={handleExpandClick} sx={{ "cursor": "pointer" }}>
                                <ExpandMoreIcon />
                            </ExpandMore>}
                        title={<Typography fontFamily={"poppins"} fontWeight="bold">{name}</Typography>} />

                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography variant="body1" fontFamily="IBM Plex Sans">Category - {category}</Typography>
                            <Typography paragraph sx={{ "textAlign": "justify" }}>{description}</Typography>
                        </CardContent>
                    </Collapse>

                    <CardActions sx={{ "justifyContent": "space-between" }} disableSpacing>
                        <div>
                            <IconButton> <DoneOutlineIcon /> </IconButton>
                            <IconButton> <DeleteOutlineIcon /> </IconButton>
                        </div>
                        <Typography paddingRight={"10px"} color="GrayText" fontFamily={"IBM Plex Sans"}>Preview</Typography>
                    </CardActions>

                </Card>
            </Box>
        </Grid>

    );
}

export default NewTodoPage;