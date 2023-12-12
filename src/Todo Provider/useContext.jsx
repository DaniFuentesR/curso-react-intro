import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();



function TodoProvider ({children}) {

  const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []); 

  const [searchValue, setSearchValue ] = React.useState(""); 

  const [openModal, setOpenModal] = React.useState(false); 
  
  const completedTodos = todos.filter((todo) => todo.completed).length
  const totalTodos = todos.length

  const searchedTodos = todos.filter((todo) => todo.text.toLowerCase().includes(searchValue.toLowerCase()))


  const addTodo = (text) => {
    const newTodosList = [...todos];
    newTodosList.push({text, completed: false})
    saveTodos(newTodosList);
  }

  const completeTodo = (text) => {

    const newTodosList = [...todos];
    const todoIndex = newTodosList.findIndex((todo)=>todo.text === text); 
    newTodosList[todoIndex].completed = true; // aca lo que estoy diciendo es que en el indice del array donde la propiedad todo.text sea igual al texto que yo le estoy enviando por parametro, ya que ese texto es el identificador unico de ese elemento. entonces, que a ese indice en su propiedad completed la cambie a true cuando ocurra todo lo que pasa en todoIndex. 
    saveTodos(newTodosList); 
  }

  const deleteTodo = (text) => {
    const newTodosList = [...todos];
    const todoIndex = newTodosList.findIndex((todo)=>todo.text === text); 
    newTodosList.splice(todoIndex, 1);
    saveTodos(newTodosList); 
  }





    return (


        <TodoContext.Provider value={{ 
            
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo
            }}>

            {children}

        </TodoContext.Provider>

        )
    }
    

export {TodoContext, TodoProvider}; 