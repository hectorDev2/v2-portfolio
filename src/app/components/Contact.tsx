import React from "react";

export const Contact = () => {
  return (
    <section className="s2">
      <div className="main-container">
        <h3 style={{ textAlign: "center" }}>Contactame</h3>
        <form
          action="https://formspree.io/f/xdopbdky"
          method="POST"
          id="contact-form"
        >
          <label htmlFor="">Nombre</label>
          <input type="text" name="name" className="input-field" />
          <label htmlFor="">Asunto</label>
          <input type="text" name="asunto" className="input-field" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" className="input-field" />
          <label htmlFor="">Mensaje</label>
          <textarea name="message" className="input-field"></textarea>
          <button className="bg-[var(--previewShadow)] text-[#fff] font-bold py-2 px-4 rounded w-full">
            enviar
          </button>
        </form>
      </div>
    </section>
  );
};
