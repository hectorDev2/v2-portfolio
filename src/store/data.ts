import gifPeltroche  from '../../public/images/peltroche-scroll.gif'
import image1  from '../../public/images/proyect0.jpg'
import image2  from '../../public/images/proyect1.jpg'
import image3  from '../../public/images/proyect2.jpg'
import image4  from '../../public/images/proyect3.jpg'

import logoAwto from '../../public/images/logo_awto.png'





  const projects = [
    {
      title: "Landing Page Pepsi",
      text: "Landing page bonita e interactiva",
      tec: ["css", "html", "javascript"],
      code: "https://github.com/darkp0lx/pepsiSlider",
      web: "https://darkp0lx.github.io/pepsiSlider/",
      gif:gifPeltroche,
      mainImage:image1
    },
    {
      title: "Aplicación para ver doramas",
      text: "Aplicación web,hecho con React Next,manejo de datos(redux). conectada a una Api externa y backend NodeJs.",
      tec: ["react", "css", "html", "javascript", "nextjs"],
      code: "https://github.com/darkp0lx/Disney-plus-clone",
      web: "https://doramasflix.co/",
      gif:gifPeltroche,
      mainImage:image2

    },
    {
      title: "Clon de Pinterest",
      text: "Aplicación echa en react con login y favoritos conectada con una Api(backend:firebase).",
      tecnologias: [],
      code: "https://github.com/darkp0lx/films2",
      web: "https://pinterest-8d55f.firebaseapp.com/",
      gif:gifPeltroche,
      mainImage:image3


    },
    {
      title: "Tienda Fashions",
      text: "tienda Fashions  con tecnologias frontend(react,redux) y backend(NodeJs,MongoDB).",
      tecnologías: [],
      code: "https://github.com/darkp0lx/frontend-starComputer",
      web: "https://fashionsapp.herokuapp.com/",
      gif:gifPeltroche,
      mainImage:image4
    },
  ];

 const experiences = [
  {
    title: 'Web Developer trainee',
    company_name: 'Digenio',
    description:
      'Digenio es una empresa local que hace pequeñas aplicaciones web para empresas PYMES.',
    icon: logoAwto,
    iconBg: '#383E56',
    date: 'Mayo 2021 - Diciembre 2021',
    points: [
      'Contribui a la construccion de una aplicación SPA para ver doramas utilizando tecnologías como React y Redux.',
      'Trabaje en equipo con otros desarrolladores experimentados en la empresa.',
      'Aprendi y trabaje con herramientas de desarrollo como Webpack y Babel para compilar y empaquetar el código de la aplicación.',
      'Integró servicios externos, como servicios de streaming de video y servicios de análisis de datos, para mejorar la funcionalidad de la aplicación.',
      'Participó en la optimización del rendimiento y la velocidad de la aplicación utilizando técnicas como la carga progresiva y la optimización de imágenes para mejorar la experiencia del usuario.'
    ],
    technologies: [
      'React',
      'Redux',
      'Webpack',
      'Babel',
      'MongoDb',
      'NextJs',
      'Figma',
      'Css'
    ]
  },

  {
    title: 'React Frontend Developer',
    company_name: 'Enova',
    description:
      'Enova es una empresa que hace tiendas online para empresas de Peru y Latinoamerica.',
    icon: logoAwto,
    iconBg: '#E6DEDD',
    date: 'Mayo 2021 - Febrero 2022',
    points: [
      'Desarrollo de tiendas online utilizando tecnologías como React, VTEX y NEXT para construir la interfaz de usuario y la funcionalidad de la tienda.',
      'Integración de sistemas de terceros para mejorar la funcionalidad de la tienda, como sistemas de pago en línea, envío y seguimiento de paquetes y análisis de datos.',
      'Desarrollo de microservicios para la gestión de diferentes funcionalidades de la tienda, como inventario, pedidos y clientes.',
      'Optimización de la velocidad y el rendimiento de la tienda mediante técnicas como la optimización de imágenes y del código.',
      'Mantenimiento y corrección de errores para garantizar el correcto funcionamiento de la tienda en todo momento.'
    ],
    technologies: ['React', 'VTEX', 'NextJs', 'Figma', 'Gasby', 'GraphQL']
  },
  {
    title: 'Full Stack Developer',
    company_name: 'AWTO',
    description:
      'AWTO es una startup que proporciona una plataforma para que las empresas de alquiler de coches gestionen su flota y sus clientes.',
    icon: logoAwto,
    iconBg: '#383E56',
    date: 'Abril 2022 - Abril 2023',
    points: [
      'Desarrollar y mantener aplicaciones web utilizando React.js y otras tecnologías relacionadas',
      'Colaborar con equipos interfuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad',
      'Implementar diseños responsivos y asegurar la compatibilidad entre navegadores',
      'Participar en revisiones de código y brindar comentarios constructivos a otros desarrolladores'
    ],
    technologies: [
      'React',
      'Redux',
      'Node',
      'Sql',
      'MongoDb',
      'NestJs',
      'Angular',
      'Nest'
    ]
  }
]
  export  {
    projects,experiences
  }