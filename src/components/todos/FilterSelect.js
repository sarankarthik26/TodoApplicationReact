import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';
import { Categories } from './NewTodoPage';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function FilterSelect({ chosenCategory, setChosenCategory }) {
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setChosenCategory(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Grid sx={{ "backgroundColor": "white", marginTop: { "xs": "10px", sm: "0px" }, borderRadius: "4px" }}>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel color="secondary" sx={{ "fontFamily": "poppins", color: "black" }}>Category</InputLabel>
                <Select multiple value={chosenCategory} onChange={handleChange} color="secondary" variant="outlined" label="Category.."
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip sx={{ "fontFamily": "IBM Plex Sans" }} color="secondary" key={value} label={value}
                                    deleteIcon={<HighlightOffIcon onMouseDown={(event) => event.stopPropagation()} />}
                                    onDelete={() => {
                                        setChosenCategory(chosenCategory.filter(category => category !== value));
                                    }}
                                />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {Categories.map((name) => (
                        <MenuItem
                            key={name.label}
                            value={name.value}
                            sx={{ "fontFamily": "poppins" }}
                        >
                            {name.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Grid>
    );
}
