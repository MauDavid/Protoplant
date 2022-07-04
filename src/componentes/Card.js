import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card ">
        <img
          src={props.imagen}
          className="card-img-top"
          alt="Imagen sobre la categoria"
        ></img>
        <div className="card-body ">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.texto}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
