import React from "react";
import "./CreateToDoButton.css"
import { TodoContext } from "../../Todo Provider/useContext";

function CreateToDoButton () {

    const {openModal, setOpenModal } = React.useContext(TodoContext);

    return (
        <button className="button" onClick={()=>{setOpenModal(!openModal)}}>+</button>
    )
}

export {CreateToDoButton}; 