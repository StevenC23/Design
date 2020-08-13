import React from "react";
import "./Designers.css";
import { DESIGNERS } from "../../source/designers/index";
import al from "../../source/imgs/aleja.jpg";

const Designers = () => {
  return (
    <section className="designers">
      <div className="designers-title">
        <h2>Diseñadoras</h2>
      </div>

      <ol className="designers-container-cards">
        {DESIGNERS.map((ds) => (
          <li key={ds.id} className="designers-card">
            <div className="designers-card-div">
              <div className="img">
                <img src={al} alt="designer-img" className="designer-img" />
              </div>

              <div className="data">
                <a href="/">{ds.nombre}</a>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Designers;
