import React from "react";
import "./ToDoCounter.css"
import { TodoContext } from "../../Todo Provider/useContext";

function ToDoCounter () {

    const {completedTodos, totalTodos} = React.useContext(TodoContext)

    return (
        <p className="title">Haz Completado <span>{completedTodos}</span> de <span>{totalTodos}</span> ToDo's</p>
    )
}

export {ToDoCounter}; 