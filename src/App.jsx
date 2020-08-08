import React from "react";
import "./index.css";

import Navbar from "./components/navbar/index";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <div className="section1"></div>
      </header>
      <section className="section2">
        <div className="section-div-container">
          <div className="section-title">
            <h2>Section2</h2>
          </div>
          <div>
            <h1>Hola</h1>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="section-div-container">
          <div className="section-title">
            <h2>Section3</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
