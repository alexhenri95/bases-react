import { useEffect, useReducer } from "react"
import TodoAdd from "./TodoAdd"
import TodoList from "./TodoList"
import { todoReducer } from "./todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])

    const handleDelete = (todoId) => {
        const confirmar = confirm('¿Ya completaste esta tarea?')

        if (confirmar) {
            const action = {
                type: 'delete',
                payload: todoId
            }
            dispatch(action)
        }
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }
    

    return (
        <div>
            <h1>To Do App ({ todos.length })</h1>
            <hr />
            <div className="row">
                <div className=" col-md-5">
                    <TodoAdd handleAddTodo={handleAddTodo} />
                </div>

                <div className=" col-md-7">
                    <TodoList 
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>

            </div>
        </div>
    )
}

export default TodoApp