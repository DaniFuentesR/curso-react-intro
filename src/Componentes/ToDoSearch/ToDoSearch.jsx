import React from "react";
import "./ToDoSearch.css"
import { TodoContext } from "../../Todo Provider/useContext";

function ToDoSearch () {

    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
        <input 
        className="searchBar" 
        type="search" 
        placeholder="Buscar ToDo" 
        onChange={(event)=>{setSearchValue(event.target.value)}} 
        value={searchValue}
        />
    )
}

export {ToDoSearch}; 