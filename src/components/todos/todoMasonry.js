import { Masonry } from "@mui/lab";
import { ButtonGroup, Fab, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import { deleter, getter, patcher } from "../../apiService";
import AddTodoCard from "./AddTodoCard";
import FilterSelect from "./FilterSelect";
import CardList from "./list";

const categoryFilters = ["all", "pending", "done"];

const TodoMasonry = () => {
    const [data, setData] = useState(null);
    const [showData, setShowData] = useState(null);
    const [error, setError] = useState(null);
    const [filterButton, setFilterButton] = useState("all");
    const [chosenCategory, setChosenCategory] = useState([]);

    useEffect(() => {
        const searchParam = new URLSearchParams();
        getSearchParam(filterButton, searchParam);
        setChosenCategory([]);

        getter("/todos?" + searchParam, setData, setError, setShowData);

        if (error) { return <p>Please refresh the page</p> }
    }, [filterButton])

    useEffect(() => {
        if (showData) {
            if (chosenCategory.length === 0) {
                setData(showData);
            }
            else {
                setData(showData.filter(datum => chosenCategory.includes(datum.category)))
            }
        }
    }, [chosenCategory])

    const persistTickUpdate = (id, bool) => {
        patcher(`/todos/${id}`, { "isDone": bool })
    }

    const persistDelete = (id) => {
        console.log("Delete", id);
        deleter(`/todos/${id}`);
    }

    const persistEdit = (id, desc) => {
        console.log("edit", id, desc);
        patcher(`/todos/${id}`, { "description": desc })
    }

    return (
        <Box width={"inherit"}>
            <Grid display={"flex"} justifyContent="space-around" alignItems={"center"} flexDirection={{ "sm": "row", "xs": "column" }}>
                <ButtonGroup>
                    {categoryFilters.map(Option => {
                        return (
                            <Fab color={filterButton === Option ? "secondary" : ""} key={Option}
                                sx={{ "fontFamily": "IBM Plex Sans", boxShadow: "none", backgroundColor: filterButton !== Option ? "transparent" : "" }}
                                variant="extended"
                                onClick={() => {
                                    setFilterButton(Option);
                                }}>
                                {Option}
                            </Fab>
                        )
                    })}
                </ButtonGroup>
                <FilterSelect chosenCategory={chosenCategory} setChosenCategory={setChosenCategory} />
            </Grid>
            {
                data
                    ? <Masonry columns={{ "sm": 1, "xs": 1, "md": 3, "lg": 4 }} spacing={3} sx={{ margin: 0, alignContent: "center" }}>
                        {filterButton !== "done" && <AddTodoCard />}
                        {data.map(element => {
                            return <CardList key={element.id} element={element} persistTickUpdate={persistTickUpdate} persistDelete={persistDelete} persistEdit={persistEdit} />
                        })}
                    </Masonry>
                    : <Box sx={{ display: 'flex', justifyContent: "center", width: "inherit" }}>
                        <CircularProgress />
                    </Box>
            }
        </Box>
    );
}

export default TodoMasonry;

function getSearchParam(filterButton, searchParam) {
    switch (filterButton) {
        case "pending": searchParam.set("isDone", "false");
            break;
        case "done": searchParam.set("isDone", "true");
            break;
        default: searchParam.delete("isDone");
    }
}
