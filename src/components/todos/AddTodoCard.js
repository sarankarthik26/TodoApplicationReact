import AddIcon from '@mui/icons-material/Add';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, IconButton } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import { green } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import React from "react";
import { useNavigate } from 'react-router-dom';

const AddTodoCard = () => {

    const navigate = useNavigate();
    return (
        <>
            <Card sx={[
                { maxWidth: 345, cursor: "pointer", color: "green", backgroundColor: "white" },
                { '&:hover': { color: 'white', backgroundColor: green[700] } }
            ]} onClick={() => navigate("/todos/new")}>

                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: green[700] }} >
                        <AddIcon />
                    </Avatar>}
                    action={
                        <IconButton sx={{ "visibility": "collapse" }}>
                            <ExpandMoreIcon />
                        </IconButton>
                    }
                    title={<Typography fontFamily={"poppins"} fontWeight="bold">Click to add Todo</Typography>}
                />

                <CardActions disableSpacing>
                    <Checkbox checked={false} icon={<DoneOutlineIcon />} />
                </CardActions>

            </Card>
        </>
    );
}

export default AddTodoCard;