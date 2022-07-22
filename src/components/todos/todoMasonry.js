import { Masonry } from "@mui/lab";
import useSWR from "swr";
import { fetcher, patcher, deleter } from "../../apiService";
import { urls } from "../../urls";
import CardList from "./list";

const TodoMasonry = () => {
    let response = []

    const { data, error } = useSWR(urls.springUrl + "/todos", fetcher);
    if (error) { return <p>Error occured :|</p> }
    if (data) { response = data; }

    const persistTickUpdate = (id, bool) => {
        patcher(`/todos/${id}`, { "isDone": bool })
    }

    const persistDelete = (id) => {
        console.log("Delete", id);
        deleter(`/todos/${id}`);
    }

    return (
        <Masonry columns={3} spacing={3}>
            {response.map(element => {
                return <CardList key={element.id} element={element} persistTickUpdate={persistTickUpdate} persistDelete={persistDelete} />
            })}
        </Masonry>
    );
}

export default TodoMasonry;