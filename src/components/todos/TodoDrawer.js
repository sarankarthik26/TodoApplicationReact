import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import RoofingIcon from '@mui/icons-material/Roofing';
import { IconButton, Typography } from "@mui/material";
import Drawer from '@mui/material/Drawer';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const TodoDrawer = ({ openDrawer, setOpenDrawer }) => {
    return (
        <Drawer anchor={'left'} open={openDrawer} onClose={() => setOpenDrawer(false)}>

            <Typography variant='h4' color="black" fontFamily={'Annie Use Your Telescope'} fontWeight="bold"
                sx={{ margin: "1.25em" }}>
                <IconButton sx={{ color: "black" }}>
                    <FactCheckOutlinedIcon />
                </IconButton>
                To-Do List
            </Typography>

            <List>
                <Link href='/' color="inherit" underline='none'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <RoofingIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link href='/todos/' color="inherit" underline='none'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <FormatListBulletedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Todos" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link href='/todos/new' color="inherit" underline='none'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <PlaylistAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Add Todo" />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link href='/' color="inherit" underline='none'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    );
}

export default TodoDrawer;