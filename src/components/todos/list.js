import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DoneIcon from '@mui/icons-material/Done';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import EditIcon from '@mui/icons-material/Edit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Card, TextField } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Checkbox from '@mui/material/Checkbox';
import Collapse from '@mui/material/Collapse';
import { pink, red, yellow } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React, { useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export const getAvatar = (param) => {
    switch (param) {
        case "TODOS":
            return (
                <Avatar sx={{ bgcolor: red[500] }} >
                    <ListRoundedIcon />
                </Avatar>
            )
        case "SHOPPING":
            return (
                <Avatar sx={{ bgcolor: pink[500] }} >
                    <ShoppingCartOutlinedIcon />
                </Avatar>
            )
        case "PROJECT":
            return (
                <Avatar sx={{ bgcolor: yellow[500] }} >
                    <NoteAltOutlinedIcon />
                </Avatar>
            )
        default:
            return "T";
    }
}


const CardList = ({ element, persistTickUpdate, persistDelete, persistEdit }) => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [tick, setTick] = useState(element.isDone);
    const [isDeleted, setIsDeleted] = useState(false);
    const [edit, setEdit] = useState(false);
    const [desc, setDesc] = useState(element.description);
    console.log(element.id);

    const handleTick = () => {
        setTick(!tick);
        persistTickUpdate(element.id, !tick);
    }

    const deleteFunction = () => {
        persistDelete(element.id)
        setIsDeleted(true);
    }

    const handleEdit = () => {
        persistEdit(element.id, desc);
        setEdit(false);
    }

    return (
        <>
            <Card sx={{ maxWidth: 345, display: (isDeleted ? "none" : "") }}>
                <CardHeader
                    avatar={getAvatar(element.category)}
                    action={
                        <ExpandMore expand={expanded} onClick={handleExpandClick}>
                            <ExpandMoreIcon />
                        </ExpandMore>
                    }
                    title={<Typography>{element.todoName}</Typography>} />

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ "display": "flex", "flexDirection": "column" }}>
                        <Typography variant="body1" paddingBottom={"1em"}>Category - {element.category}</Typography>
                        {edit
                            ? <TextField label="description" sx={{ "textAlign": "justify" }} multiline value={desc} onChange={(e) => setDesc(e.target.value)} />
                            : <Typography paragraph sx={{ "textAlign": "justify" }}>{desc}</Typography>
                        }
                    </CardContent>
                </Collapse>

                <CardActions disableSpacing>
                    <Checkbox checked={tick} onChange={handleTick} icon={<DoneOutlineIcon />} checkedIcon={<DoneIcon sx={{ "color": "green" }} />} />
                    {edit
                        ? <>
                            <IconButton onClick={handleEdit}>
                                <EditIcon />
                            </IconButton>
                        </>
                        : <>
                            <IconButton onClick={() => {
                                setEdit(true);
                                setExpanded(true);
                            }}>
                                <EditOutlinedIcon />
                            </IconButton>
                        </>}
                    <IconButton onClick={deleteFunction}>
                        <DeleteOutlineIcon />
                    </IconButton>

                </CardActions>

            </Card>
        </>
    );
}

export default CardList;