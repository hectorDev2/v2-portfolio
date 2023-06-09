"use client";
import Image from "next/image";
import perfil from "../../public/images/perfil.jpg";
import project0 from "../../public/images/proyect0.jpg";
import project1 from "../../public/images/proyect1.jpg";
import project2 from "../../public/images/proyect0.jpg";
import project3 from "../../public/images/proyect0.jpg";
import codingImg from "../../public/images/coding_normal.svg";
import { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "blue");
  const data = [
    {
      title: "Landing Page Pepsi",
      text: "Landing page bonita e interactiva",
      tec: ["css", "html", "javascript"],
      code: "https://github.com/darkp0lx/pepsiSlider",
      web: "https://darkp0lx.github.io/pepsiSlider/",
    },
    {
      title: "Aplicación para ver doramas",
      text: "Aplicación web,hecho con React Next,manejo de datos(redux). conectada a una Api externa y backend NodeJs.",
      tec: ["react", "css", "html", "javascript", "nextjs"],
      code: "https://github.com/darkp0lx/Disney-plus-clone",
      web: "https://doramasflix.co/",
    },
    {
      title: "Clon de Pinterest",
      text: "Aplicación echa en react con login y favoritos conectada con una Api(backend:firebase).",
      tecnologias: [],
      code: "https://github.com/darkp0lx/films2",
      web: "https://pinterest-8d55f.firebaseapp.com/",
    },
    {
      title: "Tienda Fashions",
      text: "tienda Fashions  con tecnologias frontend(react,redux) y backend(NodeJs,MongoDB).",
      tecnologías: [],
      code: "https://github.com/darkp0lx/frontend-starComputer",
      web: "https://fashionsapp.herokuapp.com/",
    },
  ];

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);
  return (
    <main className="relative">
      <section className="s1">
        <div className="main-container">
          <div className="greeting-wrapper">
            <h1 aria-label="Hola! yo soy developer">
              Hola! Yo soy&nbsp;<span className="typewriter"></span>
            </h1>
          </div>
          <div className="into-wrapper">
            <div className="nav-wrapper">
              <div className="dots-wrapper">
                <div id="dot-1" className="browser-dot"></div>
                <div id="dot-2" className="browser-dot"></div>
                <div id="dot-3" className="browser-dot"></div>
              </div>
              <div className="contact-wrapper">
                <a id="navigator" href="#about-me">
                  Información
                </a>
              </div>
            </div>

            <div className="left-column">
              <Image
                style={{ objectFit: "cover" }}
                src={perfil}
                width={300}
                height={300}
                alt=""
                className="profile"
              />
              <h5 style={{ textAlign: "center", lineHeight: "" }}>
                Elige un Tema
              </h5>
              <div className="theme-options-wrapper">
                <div
                  data-mode="light"
                  id="light-mode"
                  className="theme-dot"
                  onClick={() => setTheme("light")}
                ></div>
                <div
                  data-mode="blue"
                  id="blue-mode"
                  className="theme-dot"
                  onClick={() => setTheme("blue")}
                ></div>
                <div
                  data-mode="purple"
                  id="purple-mode"
                  className="theme-dot"
                  onClick={() => setTheme("purple")}
                ></div>
                <div
                  data-mode="green"
                  id="green-mode"
                  className="theme-dot"
                  onClick={() => setTheme("green")}
                ></div>
              </div>
              <p className="settings-note">
                el tema elegido sera guardado para su <br /> proxima visita
              </p>
            </div>

            <div className="right-column">
              <div className="preview-shadow">
                <div className="preview">
                  <div id="corner-tl" className="corner"></div>
                  <div id="corner-tr" className="corner"></div>
                  <h3>Que es lo que hago?</h3>
                  <p>
                    Soy un desarrollador frontend y me encargo de desarrollar,
                    diseñar apps y paginas webs.
                  </p>
                  <div id="corner-br" className="corner"></div>
                  <div id="corner-bl" className="corner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="s2">
        <div className="main-container">
          <div className="about-wrapper">
            <div id="about-me" className="about-me">
              <h4>Mas sobre mi</h4>
              <p>
                Soy un desarrollador de software habilidoso con experiencia en
                TypeScript y JavaScript, tengo conocimientos en frameworks como
                React, Angular,NextJs y NestJs. Aprendo muy rápido y colaboro
                estrechamente con los clientes para crear soluciones eficientes,
                escalables y amigables para el usuario que resuelven problemas
                del mundo real. ¡Trabajemos juntos para dar vida a tus ideas!
              </p>
              <p>
                Me encanta programar y ver como de la nada puedes construir
                cosas fascinantes como esta web por ejemplo
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
              <div id="skills">
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
              <Image
                alt="social-links.png "
                style={{ width: "523px", height: "340px" }}
                id="social_img"
                src={codingImg}
                width={500}
                height={300}
              />
              <h3>Mis Redes:</h3>
              <a target="_blank" href="https://github.com/darkp0lx">
                <i className="fab fa-github"></i>: @HectorPaoloBarazorda
              </a>
              <br />
              <a
                target="_blank"
                href="https://www.instagram.com/hectorbarazorda/"
              >
                <i className="fab fa-facebook"></i>: @HectorPaoloBarazorda
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="s1">
        <div className="main-container">
          <h3 style={{ textAlign: "center" }}>Algunos de mis proyectos!</h3>
          <div className="post-wrapper">
            <div className="post">
              <Image
                className="portafolio"
                src={project0}
                alt=""
                width={300}
                height={300}
              />
              <div className="post-preview">
                <div className="post-title">
                  <h3>Landing Page Pepsi</h3>

                  <div className="post-into">
                    <p>Una pagina web demostrativa y divertida.</p>
                    <p className="link">ver mas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post">
              <Image
                className="portafolio"
                src={project1}
                alt=""
                width={300}
                height={300}
              />
              <div className="post-preview">
                <div className="post-title">
                  <h3>Disney Plus Clone</h3>

                  <div className="post-into">
                    <p>
                      Aplicación de peliculas con buscador,login,agregar y
                      quitar favoritos.Que nos muestra la info y podemos ver
                      peliculas online.
                    </p>
                    <p className="link">ver mas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post">
              <Image
                className="portafolio"
                src={project2}
                alt=""
                width={300}
                height={300}
              />
              <div className="post-preview">
                <div className="post-title">
                  <h3>Clon de Pinterest 🔥</h3>

                  <div className="post-into">
                    <p>
                      Aplicación echa en react con login y favoritos conectada
                      con una Api(backend:firebase).
                    </p>
                    <p className="link">ver mas</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post">
              <Image
                className="portafolio"
                src={project3}
                alt=""
                width={300}
                height={300}
              />
              <div className="post-preview">
                <div className="post-title">
                  <h3>Tienda Fashions</h3>
                  <div className="post-into">
                    <p>
                      Tienda virtual frontend:react y backend:nodeJs(login,
                      carro de compras y proceso de compra).
                    </p>
                    <p className="link">ver más</p>
                  </div>
                </div>
              </div>
            </div>
            <div id="modal" className="modal">
              <div className="img-modal">
                <Image
                  id="img-modal"
                  src={project1}
                  alt=""
                  width={300}
                  height={200}
                />
                <div className="text-modal">
                  <h2 className="name">Landing Page</h2>
                  <p className="description">
                    web para la converción de clientes, una web atractiva y
                    dinámica <span style={{ fontSize: "40px" }}>&#129299;</span>
                  </p>
                  <div className="tecnologias">
                    <h3>tecnologías :</h3>
                    <ul className="list-tecnologias">
                      <li>
                        {" "}
                        <i id="html" className="fab fa-html5"></i>HTML
                      </li>
                      <li>
                        {" "}
                        <i id="css" className="fab fa-css3-alt"></i>CSS
                      </li>
                      <li>
                        <i id="javascript" className="fab fa-js-square"></i>
                        Javascript
                      </li>
                      <li>
                        <i className="fab fa-react"></i>React
                      </li>
                    </ul>
                    <div className="botones">
                      <a target="_black" id="github" href="">
                        <button className="boton">
                          <i className="fab fa-github"></i> ver código
                        </button>
                      </a>
                      <a target="_black" id="web" href="">
                        <button className="boton">
                          <i className="fab fa-chrome"></i> ver pagina
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
            <input type="submit" value="enviar" id="submit-btn" />
          </form>
          <div className="estatus" id="status"></div>
        </div>
      </section>
    </main>
  );
}
