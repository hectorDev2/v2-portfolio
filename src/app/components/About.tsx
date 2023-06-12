import React from "react";
import Image from "next/image";
import { FaGithub, FaInstagram } from "react-icons/fa";
import codingImg from "../../../public/images/coding_normal.svg";

export const About = () => (
  <section className="s2">
    <div className="main-container">
      <div className="about-wrapper ">
        <div id="about-me" className="about-me">
          <h4>Mas sobre mi</h4>
          <p>
            Soy un desarrollador de software habilidoso con experiencia en
            TypeScript y JavaScript, tengo conocimientos en frameworks como
            React, Angular,NextJs y NestJs. Aprendo muy rápido y colaboro
            estrechamente con los clientes para crear soluciones eficientes,
            escalables y amigables para el usuario que resuelven problemas del
            mundo real. ¡Trabajemos juntos para dar vida a tus ideas!
          </p>
          <p>
            Me encanta programar y ver como de la nada puedes construir cosas
            fascinantes como esta web por ejemplo
            <span style={{ fontSize: "20px" }}>&#128521;</span>
          </p>
          <hr />
          <h4>SKILLS</h4>
          <p>
            Desarrollador Frontend React{" "}
            <a target="_blank" href="cv.pdf">
              Descargar CV
            </a>
          </p>
          <div id="skills" className="py-4">
            <ul className="list-1">
              <li>
                <span>
                  <i className="fab fa-html5"></i>
                </span>
                HTML
              </li>
              <li>
                <span>
                  <i className="fab fa-css3-alt"></i>
                </span>
                CSS
              </li>
              <li>
                <span>
                  <i className="fab fa-js-square"></i>
                </span>
                JavaScript
              </li>
              <li>
                <span>
                  <i className="fab fa-react"></i>
                </span>
                React
              </li>
              <li>
                <span>
                  <i className="fab fa-battle-net"></i>
                </span>
                NextJS
              </li>
              <li>
                <span>
                  <i className="fab fa-git-square"></i>
                </span>
                git
              </li>
            </ul>
            <ul>
              <li>git</li>
              <li>Redux</li>
              <li>API REST</li>
              <li>BOOTSTRAP</li>
              <li>Node Js</li>
              <li>responsive Design</li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <div className="image-about"></div>
          <h3>Mis Redes:</h3>
          <a
            className="flex justify-center items-center"
            target="_blank"
            href="https://github.com/darkp0lx"
          >
            <FaGithub color={"var(--coverText)"} /> @HectorPaoloBarazorda
          </a>
          <a
            className="flex justify-center items-center"
            target="_blank"
            href="https://www.instagram.com/hectorbarazorda/"
          >
            <FaInstagram color={"var(--coverText)"} /> @HectorPaoloBarazorda
          </a>
        </div>
      </div>
    </div>
  </section>
);
