
const TodoListItem = ({todo, handleDelete, handleToggle, i}) => {
    return (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span onClick={ () => handleToggle(todo.id) } className={`${ todo.done && 'complete'}`}>
                { i + 1}. {todo.description}
            </span>

            <button onClick={ () => handleDelete(todo.id) } className="btn btn-sm btn-danger small">
                Borrar
            </button>
        </li>
    )
}

export default TodoListItem