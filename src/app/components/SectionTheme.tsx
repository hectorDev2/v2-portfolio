"use client";
import React, { useEffect, useState } from "react";
import "../globals.css";

export const SectionTheme = () => {
  const [theme, setTheme] = useState(
    (typeof window !== "undefined" && localStorage?.getItem("theme")) || "blue"
  );

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  return (
    <>
      <h5 style={{ textAlign: "center", lineHeight: "" }}>Elige un Tema</h5>
      <div className="theme-options-wrapper">
        <div
          id="light-mode"
          className="theme-dot"
          onClick={() => setTheme("light")}
        ></div>
        <div
          id="blue-mode"
          className="theme-dot"
          onClick={() => setTheme("blue")}
        ></div>
        <div
          id="purple-mode"
          className="theme-dot"
          onClick={() => setTheme("purple")}
        ></div>
        <div
          id="green-mode"
          className="theme-dot"
          onClick={() => setTheme("green")}
        ></div>
      </div>
      <p className="settings-note">
        el tema elegido sera guardado para su <br /> proxima visita
      </p>
    </>
  );
};
