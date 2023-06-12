import Image from "next/image";
import perfil from "../../../public/images/perfil.jpg";
import Example from "./Example";
import { SectionTheme } from "./SectionTheme";

export const Hero = () => {
  return (
    <section className="s1">
      <div className="main-container pt-[3rem]">
        <div className="greeting-wrapper">
          <h1
            className="text-sm md:text-3xl"
            aria-label="Hola! yo soy developer"
          >
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
            <SectionTheme />
          </div>

          <div className="right-column">
            <div className="preview-shadow">
              <div className="preview w-[300px] md:w-[400px]">
                <div id="corner-tl" className="corner"></div>
                <div id="corner-tr" className="corner"></div>
                <h3>Que es lo que hago?</h3>
                <p>
                  Hola soy hector barazorda un desarrollador typescript y me
                  encargo de desarrollar, diseñar tecnologia web,tanto en el
                  frontend como en el backend.
                </p>
                <div id="corner-br" className="corner"></div>
                <div id="corner-bl" className="corner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
