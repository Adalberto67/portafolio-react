import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

// Datos de Proyectos
const projectData = [
  { 
    id: 1, 
    name: "Formularios de Registro", 
    description: "Página para Registro, Inscripción y Asistencia de un alumno en el API del Profesor.", 
    tags: ["HTML", "CSS"], 
    image: "/portafolio-react/assets/Formularios de Registro.png", 
    link: "https://adalberto67.github.io/Formularios-de-registro/index.html", 
    github: "https://github.com/Adalberto67/Formularios-de-registro.git" 
  },
  { 
    id: 2, 
    name: "Sitio de e-Commerce", 
    description: "Sitio web de e-commerce accesible, enfocado a personas con discapacidad visual.", 
    tags: ["HTML", "CSS", "JavaScript"], 
    image: "/portafolio-react/assets/Sitio de e-Commerce.png", 
    link: "https://adalberto67.github.io/Sitio-de-e-Commerce/", 
    github: "https://github.com/Adalberto67/Sitio-de-e-Commerce.git" 
  },
  { 
    id: 3, 
    name: "Red Social", 
    description: "Maqueta de una red social compuesta por un feed y perfiles de 3 usuarios diferentes.", 
    tags: ["HTML", "CSS", "JavaScript"], 
    image: "/portafolio-react/assets/Red Social.png", 
    link: "https://adalberto67.github.io/Mi-Red-Social/", 
    github: "https://github.com/Adalberto67/Mi-Red-Social.git" 
  },
  { 
    id: 4, 
    name: "Cheat sheet", 
    description: "Cheat sheet o 'acordeón' sobre los principales elementos de HTML.", 
    tags: ["HTML", "CSS"], 
    image: "/portafolio-react/assets/Cheat sheet.png", 
    link: "https://adalberto67.github.io/Cheat-sheet/", 
    github: "https://github.com/Adalberto67/Cheat-sheet.git" 
  },
  { 
    id: 5, 
    name: "Escapa de P. Diddy", 
    description: "Divertido juego de navegador para familiarizarse con estructuras básicas de JS y eventos.", 
    tags: ["HTML", "CSS", "JavaScript"], 
    image: "/portafolio-react/assets/Escapa de P. Diddy.png", 
    link: "https://adalberto67.github.io/Escapa-de-Diddy/", 
    github: "https://github.com/Adalberto67/Escapa-de-Diddy.git" 
  },
  { 
    id: 6, 
    name: "Formulario CRUD", 
    description: "Formulario que implemente las cuatro operaciones básicas de un CRUD usando una API escolar.", 
    tags: ["HTML", "CSS", "JavaScript"], 
    image: "/portafolio-react/assets/Formulario CRUD.png", 
    link: "https://adalberto67.github.io/Formulario-CRUD/", 
    github: "https://github.com/Adalberto67/Formulario-CRUD.git" 
  },
  { 
    id: 7, 
    name: "Tic-Tac-Toe", 
    description: "Juego Tic-Tac-Toe con diseño llamativo usando React.", 
    tags: ["React", "Vite","HTML", "CSS", "JavaScript"], 
    image: "/portafolio-react/assets/Tic-Tac-Toe.png", 
    link: "https://adalberto67.github.io/Tic-Tac-Toe/", 
    github: "https://github.com/Adalberto67/Tic-Tac-Toe.git" 
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsContainer}>
      <h2 className={styles.heading}>Mis Proyectos</h2>
      <p className={styles.subtitle}>
        Una selección de mis trabajos recientes en Desarrollo Web.
      </p>
      <div className={styles.grid}>
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;