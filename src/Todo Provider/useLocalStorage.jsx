import React from "react";


// Cuando es un Hook se empieza con la palabra use, para así diferenciarlo de las funciones de componentes normales. 
// Esta función va a contener todo lo que tiene que ver con Local Storage

function useLocalStorage (itemName, initialValue) { //Initial Value, es el valor inicial que le quiero dar a mi localStorage para el momento donde no hay nada en él. 

    const [item, setItem] = React.useState(initialValue); 
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false); 
    
    
    React.useEffect(()=>{

        setTimeout(()=>{
            try {
                const localStorageTodos = localStorage.getItem(itemName);
                let parsedItem; 
        
                //Condicional para cuando es la primera vez que ingreso a la app y no tengo nada de info, y para cuando ya hay información. 
                if (!localStorageTodos) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue)); 
                    parsedItem = []; 
                } else {
                    parsedItem = JSON.parse(localStorageTodos)
                    setItem(parsedItem); 
                }
        
                setLoading(false); 
            } catch (error) {
                setLoading(false); 
                setError({error: error.message})
            }
        }, 1600)
    }, []); 
    
    


// FUNCIÓN PARA QUE AL RECARGAR LA PAGINA HAYA PERSISTENCIA DE DATOS EN EL LOCAL STORAGE Y SE ACTUALICE MI ESTADO. 

  const saveItem = (newArrItem) => {

    localStorage.setItem("TODOS_V1", JSON.stringify(newArrItem))
    setItem(newArrItem);
  }

  return {item, saveItem, loading, error}; 
}

export {useLocalStorage}; 



//   const arrayToDos = [
//   {text: "sacar a noah", completed: true},
//   {text: "cortar tomate", completed: false},
//   {text: "terminar curso de manip arrays", completed: false},
//   {text: "mimir", completed: true},
//   {text: "leer", completed: true},
//   {text: "COCINAR", completed: false},
//   {text: "Entrenar", completed: true},
// ]

//  localStorage.setItem("TODOS_V1", JSON.stringify(arrayToDos)); 