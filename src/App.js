import React from "react";

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navegador from "./componentes/Navegador";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";

function App() {
  return (
    <div className="App">
      <Navegador />
      <Routes>
        <Route path="/productos" element={<Productos />}></Route>
        <Route path="/" exact element={<Inicio />}></Route>
      </Routes>
    </div>
  );
}

export default App;
