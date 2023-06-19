import gifPeltroche from "../../public/images/gifs/peltroche-scroll.gif";
import gifBikeVolt from "../../public/images/gifs/bike-volt.gif";
import gifLandingCourses from "../../public/images/gifs/landing-courses.gif";
import gifStoreApp from "../../public/images/gifs/store-app.gif";

import peltrocheImg from "../../public/images/proyect0.png";
import bikeVoltImg from "../../public/images/proyect1.png";
import storeAppImg from "../../public/images/proyect2.png";
import coursesImg from "../../public/images/proyect3.png";
import { FaReact, FaFigma } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiNextdotjs, SiNestjs } from "react-icons/si";

import logoAwto from "../../public/images/logo_awto.png";
import { SiRedux } from "react-icons/si";

const projects = [
  {
    title: "Gym Peltroche",
    text: "Web app para la gestión de la prueba de fisiología de la peltroche.",
    tec: ["css", "html", "javascript"],
    code: "https://github.com/hectorDev2/peltroche",
    web: "https://peltroche.vercel.app/",
    gif: gifPeltroche,
    mainImage: peltrocheImg,
  },
  {
    title: "Bike Volt",
    text: "Aplicación web, para mostrar la identidad y productos de Bike Volt",
    tec: ["react", "css", "html", "javascript", "nextjs"],
    code: "https://github.com/hectorDev2/bike-volt",
    web: "https://bike-volt.vercel.app/",
    gif: gifBikeVolt,
    mainImage: bikeVoltImg,
  },
  {
    title: "Courses",
    text: "landing page de cursos de tecnologías frontend(react,redux) y backend(NodeJs,MongoDB).",
    tecnologias: [],
    code: "https://github.com/hiriski/coursespace-landing-page",
    web: "https://coursespace.vercel.app/",
    gif: gifLandingCourses,
    mainImage: coursesImg,
  },
  {
    title: "Tienda Fashions",
    text: "tienda Fashions  con tecnologias frontend(react,redux) y backend(NodeJs,MongoDB).",
    tecnologías: [],
    code: "https://github.com/stefvndev/Minimalist-E-commerce",
    web: "https://minimalist-e-commerce.vercel.app/",
    gif: gifStoreApp,
    mainImage: storeAppImg,
  },
];

const experiences = [
  {
    title: "Web Developer trainee",
    company_name: "Digenio",
    description:
      "Digenio es una empresa local que hace pequeñas aplicaciones web para empresas PYMES.",
    icon: logoAwto,
    iconBg: "#383E56",
    date: "Mayo 2021 - Diciembre 2021",
    points: [
      "Contribui a la construccion de una aplicación SPA para ver doramas utilizando tecnologías como React y Redux.",
      "Trabaje en equipo con otros desarrolladores experimentados en la empresa.",
      "Aprendi y trabaje con herramientas de desarrollo como Webpack y Babel para compilar y empaquetar el código de la aplicación.",
      "Integró servicios externos, como servicios de streaming de video y servicios de análisis de datos, para mejorar la funcionalidad de la aplicación.",
      "Participó en la optimización del rendimiento y la velocidad de la aplicación utilizando técnicas como la carga progresiva y la optimización de imágenes para mejorar la experiencia del usuario.",
    ],
    technologies: [
      { label: "React", icon: <FaReact /> },
      { label: "Redux", icon: <SiRedux /> },
      { label: "MongoDb", icon: <DiMongodb /> },
      { label: "NextJs", icon: <SiNextdotjs /> },
      { label: "NestJs", icon: <SiNestjs /> },
      { label: "Figma", icon: <FaFigma /> },
    ],
  },

  {
    title: "React Frontend Developer",
    company_name: "Enova",
    description:
      "Enova es una empresa que hace tiendas online para empresas de Peru y Latinoamerica.",
    icon: logoAwto,
    iconBg: "#E6DEDD",
    date: "Mayo 2021 - Febrero 2022",
    points: [
      "Desarrollo de tiendas online utilizando tecnologías como React, VTEX y NEXT para construir la interfaz de usuario y la funcionalidad de la tienda.",
      "Integración de sistemas de terceros para mejorar la funcionalidad de la tienda, como sistemas de pago en línea, envío y seguimiento de paquetes y análisis de datos.",
      "Desarrollo de microservicios para la gestión de diferentes funcionalidades de la tienda, como inventario, pedidos y clientes.",
      "Optimización de la velocidad y el rendimiento de la tienda mediante técnicas como la optimización de imágenes y del código.",
      "Mantenimiento y corrección de errores para garantizar el correcto funcionamiento de la tienda en todo momento.",
    ],
    technologies: [
      { label: "React", icon: <FaReact /> },
      { label: "Redux", icon: <SiRedux /> },
      { label: "MongoDb", icon: <DiMongodb /> },
      { label: "NextJs", icon: <SiNextdotjs /> },
      { label: "NestJs", icon: <SiNestjs /> },
      { label: "Figma", icon: <FaFigma /> },
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "AWTO",
    description:
      "AWTO es una startup que proporciona una plataforma para que las empresas de alquiler de coches gestionen su flota y sus clientes.",
    icon: logoAwto,
    iconBg: "#383E56",
    date: "Abril 2022 - Abril 2023",
    points: [
      "Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas",
      "Colaborar con equipos interfuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad",
      "Implementar diseños responsivos y asegurar la compatibilidad entre navegadores",
      "Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores",
    ],
    technologies: [
      { label: "React", icon: <FaReact /> },
      { label: "Redux", icon: <SiRedux /> },
      { label: "MongoDb", icon: <DiMongodb /> },
      { label: "NextJs", icon: <SiNextdotjs /> },
      { label: "NestJs", icon: <SiNestjs /> },
      { label: "Figma", icon: <FaFigma /> },
    ],
  },
];
export { projects, experiences };
