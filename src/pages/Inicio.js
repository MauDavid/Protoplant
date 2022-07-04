import React from "react";
import CategoriaPlantas from "../componentes/CategoriaPlantas";
import Conocenos from "../componentes/Conocenos";
import Presentacion from "../componentes/Presentacion";

function Inicio() {
  return (
    <div>
      <Presentacion />
      <Conocenos />
      <CategoriaPlantas />
    </div>
  );
}

export default Inicio;
