import React from "react";
import "./App.css"
import { AppUI } from "./AppUI";
import { TodoProvider } from "../Todo Provider/useContext";


function App() {


  return (
    <div className="MainContainer">

    <TodoProvider>
      <AppUI/>
    </TodoProvider>

    </div>
  );
}

export default App;
