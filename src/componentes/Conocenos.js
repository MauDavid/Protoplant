import React from "react";
import conocenos from "../assets/imagenes/acercaNosotros-2347550_640.jpg";
function Conocenos() {
  return (
    <div
      className="conocenos"
      data-aos="flip-left"
      data-aos-delay="250"
      data-aos-duration="1000"
    >
      <div className="row row-cols-1 row-cols-md-1  ">
        <div className="col-md-8 tarjeta">
          <img
            src={conocenos}
            className="img-fluid rounded-start"
            alt="..."
          ></img>
        </div>
        <div className="col-md-4">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Blanditiis exercitationem rerum mollitia impedit beatae aliquam
              sunt architecto deleniti, earum consequuntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conocenos;
