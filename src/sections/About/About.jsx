import React from 'react';
import styles from './About.module.css';

const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Flutter', 
  'Java', 'Python', 'SQL', 'Git', 'GitHub', 'Docker', 
];

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.heading}>Acerca de Mí</h2>
      <p className={styles.subHeading}>
        En este apartado encontrarás más información acerca de mí, lo que hago y mis habilidades actuales.
      </p>

      <div className={styles.contentWrapper}>
        
        {/* Columna Izquierda: Texto */}
        <div className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>¡Conóceme!</h3>
          <p className={styles.description}>
            ¡Hola! Soy Adalberto Enai Pech Us, un apasionado estudiante de Ingeniería en Tecnología de Software en la Universidad Autónoma de Campeche (UACAM).
            Tengo 20 años, disfruto programar y me he enfocado en el desarrollo Full Stack, explorando tanto el diseño y la interactividad del Frontend como la lógica robusta y la gestión de datos del Backend.
            Busco aplicar mis conocimientos en proyectos desafiantes y seguir creciendo profesionalmente.
          </p>
        </div>
        
        {/* Columna Derecha: Skills */}
        <div className={styles.skillsSection}>
          <h3 className={styles.sectionTitle}>Mis habilidades</h3>
          <div className={styles.skillsGrid}>
            {SKILLS.map((skill, index) => (
              <span key={index} className={styles.skillTag}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;