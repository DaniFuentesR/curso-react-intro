import React from "react";
import { CreateToDoButton } from "../Componentes/CreateToDoButton/CreateToDoButton";
import { ToDoCounter } from "../Componentes/ToDoCounter/ToDoCounter";
import { ToDoList } from "../Componentes/ToDoList/ToDoList";
import { ToDoSearch } from "../Componentes/ToDoSearch/ToDoSearch";
import { ToDoItem } from "../Componentes/TodoItem/ToDoItem";
import { TodosList } from "../Componentes/LoadingSkeletons/TodosList/TodosList";
import { TodoContext } from "../Todo Provider/useContext";
import { Modal } from "../Modal/modal";
import { TodoForm } from "../Componentes/TodoForm/TodoForm";

function AppUI () {

    const {searchedTodos, completeTodo, deleteTodo, loading, error, openModal, setOpenModal} = React.useContext(TodoContext);
     
    return (
        <>


            <ToDoCounter/>
            <ToDoSearch /> 

           
             <ToDoList>
                {loading && <TodosList/>}
                {error && <p>Hubo un error cargando la lista...</p>}
                {(!loading && searchedTodos.length === 0) && <p>Crea tu primer ToDo!</p>}

                {searchedTodos.map((todo) => <ToDoItem key={todo.text} completed={todo.completed} text={todo.text} onComplete={()=>{completeTodo (todo.text)}} onDelete={()=>{deleteTodo(todo.text)}}/> )}
             </ToDoList>  
           

            <CreateToDoButton setOpenModal={setOpenModal}/>


            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
           )}
        </>
    )
}; 

export {AppUI}; 