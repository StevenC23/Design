import React from "react";
import "./index.css";

import Navbar from "./components/navbar/index";

function App() {
  return (
    <header>
      <Navbar />
      <section className="section1"></section>
      <section className="section2">
        <div>
          <h2>Section2</h2>
        </div>
      </section>
      <section className="section3">
        <div>
          <h2>Section3</h2>
        </div>
      </section>
    </header>
  );
}

export default App;
