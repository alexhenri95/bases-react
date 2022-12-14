import TodoListItem from "./TodoListItem"

const TodoList = ({todos, handleDelete, handleToggle}) => {
    return (
        <ul className="list-group ">
        {
            todos.map( (todo, i) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    i={i}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            ))
        }
        </ul>
    )
}

export default TodoList