import useForm from "../../hooks/useForm"


const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length <= 1) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        handleAddTodo(newTodo)

        reset()
    }

    return (
        <form onSubmit={ handleSubmit } className="mb-5">
            <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input onChange={handleInputChange} type="text" name="description" autoComplete="off" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Agregar</button>
        </form>
    )
}

export default TodoAdd