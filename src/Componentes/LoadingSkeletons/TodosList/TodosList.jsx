import React from "react";
import "./TodosList.css"; 
import { CgSpinnerTwo } from "react-icons/cg";



function TodosList () {

    return(

        <div className="LoadingTodo-container">

                <p>CARGANDO LISTA DE ACTIVIDADES...</p>
                <CgSpinnerTwo className="spinner"/>
               
    
        </div>
    )
};

export {TodosList}; 