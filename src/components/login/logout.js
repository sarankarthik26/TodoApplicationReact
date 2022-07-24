import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Button, DialogActions, DialogContent, DialogContentText, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStore } from '../../App';

const Logout = () => {
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const { setUserName } = useStore();

    const handleClose = ({ link }) => {
        setOpen(false);
        console.log(link);
        link ? navigate(link) : navigate(-1);
    }

    const handleLogout = () => {
        setUserName("");
        handleClose({ link: "/" });
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle display="flex" justifyContent="space-between" alignItems="center">
                <Typography>Logout</Typography>
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <DialogContentText paddingBottom="1em">
                    <Typography>Are you sure you want to logout?</Typography>
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleLogout}>
                        Log out
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
}

export default Logout;