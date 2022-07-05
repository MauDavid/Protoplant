import React from "react";
import conocenos from "../assets/imagenes/lotus-7287044_640.jpg";
import cactus from "../assets/imagenes/cactus-1842095_640.jpg";

function Carrucel() {
  return (
    <div className="container">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={conocenos}
              className="d-block "
              alt="..."
              style={{ wight: 388, height: 400 }}
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={cactus}
              className="d-block  "
              alt="..."
              style={{ wight: 388, height: 400 }}
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src={conocenos}
              className="d-block "
              alt="..."
              style={{ wight: 388, height: 400 }}
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carrucel;
