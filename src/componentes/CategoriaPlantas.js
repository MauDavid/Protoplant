import React from "react";
import CategoriaPlantasDatos from "./CategoriaPlantasDatos";
import Card from "./Card";
function CategoriaPlantas() {
  return (
    <div className="categoria-plantas">
      <div className="container ">
        <div className="row justify-content-evenly ">
          {CategoriaPlantasDatos.map((CategoriaPlantasDatos) => (
            <div className="col-sm-3 " key={CategoriaPlantasDatos.id}>
              <Card
                imagen={CategoriaPlantasDatos.imagen}
                titulo={CategoriaPlantasDatos.titulo}
                texto={CategoriaPlantasDatos.texto}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriaPlantas;
