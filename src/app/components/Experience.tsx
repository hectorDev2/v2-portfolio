import React from "react";
import { ItemExp } from "./ItemExp";

const Experience = () => (
  <section className="s2">
    <div className="main-container">
      <h3>Experiencia Laboral</h3>
      <p>Esta es la experiencia que adquiri en estos años 🤓</p>
      <div className="flex gap-2 flex-wrap">
        <ItemExp />
        <ItemExp />
        <ItemExp />
      </div>
    </div>
  </section>
);

export default Experience;
