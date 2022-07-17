import List from "./list";

const Todos = () => {
    const response = [{ "id": 1, "todoName": "TestTodo-1", "isDone": false }, { "id": 2, "todoName": "TestTodo-2", "isDone": true }]

    return (
        response.map(element => {
            return <List key={element.id} id={element.id} name={element.todoName} isDone={element.isDone} />
        })
    )
}

export default Todos;