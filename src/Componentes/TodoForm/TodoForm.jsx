import React from "react";
import "./TodoForm.css"; 
import { TodoContext } from "../../Todo Provider/useContext";

function TodoForm () {

    const {setOpenModal, addTodo } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState(""); 

    const onSubmit = (event) => {
        event.preventDefault(); 
        addTodo(newTodoValue); 
        setOpenModal(false);

    }

    const onCancel = () => {

        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value); 
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo ToDo</label>
            <textarea placeholder="Descripción del ToDo" value={newTodoValue} onChange={onChange}></textarea>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button className="TodoForm-button--add" type="submit">Añadir</button>
            </div>
        </form>
    )
}

export {TodoForm}; 