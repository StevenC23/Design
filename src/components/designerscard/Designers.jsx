import React from "react";
import "./Designers.css";
import { DESIGNERS } from "../../source/designers/index";

const Designers = () => {
  return (
    <section className="designers">
      <div className="designers-title">
        <h2>Diseñadoras</h2>
      </div>
      <div className="designers-container">
        <ol className="designers-container-cards">
          {DESIGNERS.map((ds) => (
            <li key={ds.id} className="designers-card">
              <div className="designer-img">
                <img src="" alt="designer" />
              </div>
              <div className="data">
                <a href="/">{ds.nombre}</a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Designers;
