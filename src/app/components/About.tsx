import React from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact, FaAngular } from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BsGit, BsGithub } from "react-icons/bs";

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
            <a target="_blank" href="/public/images/cv.pdf">
              Descargar CV
            </a>
          </p>
          <div id="skills" className="py-4">
            <ul className="list-1">
              <li className="flex justify-left  gap-2 items-center">
                <AiFillHtml5 />
                HTML
              </li>
              <li className="flex justify-left  gap-2 items-center">
                <FaCss3Alt />
                CSS
              </li>
              <li className="flex justify-left  gap-2 items-center">
                <SiJavascript />
                JavaScript
              </li>
              <li className="flex justify-left  gap-2 items-center">
                <FaReact />
                React
              </li>
              <li className="flex justify-left  gap-2  items-center">
                <SiNextdotjs />
                NextJS
              </li>
              <li className="flex justify-left gap-2 items-center">
                <BsGit />
                git
              </li>
            </ul>
            <ul className="list-2">
              <li className="flex justify-left  gap-2 items-center">
                <FaAngular />
                Angular
              </li>
              <li className="flex justify-left  gap-2 items-center">
                <SiTailwindcss />
                Tailwind css
              </li>
              <li className="flex justify-left  gap-2 items-center">
                <SiTypescript />
                Typescript
              </li>
              <li className="flex justify-left  gap-2 items-center">
                <SiNestjs />
                Nest
              </li>
              <li className="flex justify-left  gap-2  items-center">
                <SiExpress />
                Express
              </li>
              <li className="flex justify-left gap-2 items-center">
                <BsGithub />
                github
              </li>
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
