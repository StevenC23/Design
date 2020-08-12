import React from "react";
import "./index.css";
import Designers from "./components/designerscard/index";

import Navbar from "./components/navbar/index";

function App() {
  return (
    <>
      <header>
        <Navbar />
        <div className="section1"></div>
      </header>
      <Designers />
      <section className="usb">
        <div className="usb-container">
          <div className="section-title">
            <h2>Usb</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
