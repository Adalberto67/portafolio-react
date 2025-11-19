import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Animación de bienvenida */}
      <h1 className={`${styles.welcomeTitle} ${styles.animateIn}`}>
        Welcome
      </h1>
      
      <div className={styles.contentBox}>
        <p className={styles.bioText}>
          Hola, soy Adalberto Pech, un joven desarrollador web que sigue sus estudios 
          para ser Ingeniero en Tecnología de Software, mis trabajos están orientados a resultados 
          que construyen y gestionan Sitios web y Aplicaciones web para resolver problemas 
          reales y mejorar la experiencia del usuario.
        </p>
        
        <a href="#about" className={styles.ctaButton}>Conóceme más</a>
      </div>
    </div>
  );
};

export default Home;