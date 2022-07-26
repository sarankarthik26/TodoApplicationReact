import { Masonry } from "@mui/lab";
import { useEffect, useState } from "react";
import { deleter, getter, patcher } from "../../apiService";
import CardList from "./list";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import AddTodoCard from "./AddTodoCard";

const TodoMasonry = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getter("/todos", setData, setError);
        if (error) { return <p>Please refresh the page</p> }
    }, [])

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
        <>
            {
                data
                    ? <Masonry columns={3} spacing={3} sx={{ margin: 0, alignContent: "center" }}>
                        <AddTodoCard />
                        {data.map(element => {
                            return <CardList key={element.id} element={element} persistTickUpdate={persistTickUpdate} persistDelete={persistDelete} persistEdit={persistEdit} />
                        })}
                    </Masonry>
                    : <Box sx={{ display: 'flex', justifyContent: "center", width: "inherit" }}>
                        <CircularProgress />
                    </Box>
            }
        </>
    );
}

export default TodoMasonry;