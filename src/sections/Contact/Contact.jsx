import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className={styles.contactWrapper}>
      
      {/* Lado Izquierdo: Texto estilo "Disponible..." */}
      <div className={styles.textSection}>
        <h2 className={styles.heading}>
          Disponible para oportunidades seleccionadas de freelance
        </h2>
        <p className={styles.prompt}>
          ¿Tienes algún proyecto emocionante con el que necesitas ayuda?
          <br />
          <strong>¡Envíame un correo electrónico o contáctame a través de los medios que te proporciono!</strong>
        </p>
      </div>

      {/* Lado Derecho: Puzzle / Grid de Contacto */}
      <div className={styles.puzzleGrid}>
        
        {/* Bloque LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/adalberto-e-pech-us-477357392" 
          target="_blank" rel="noopener noreferrer" 
          className={`${styles.puzzleBox} ${styles.boxLinkedin}`}
        >
          <FaLinkedin className={styles.icon} />
          <span>LinkedIn</span>
        </a>

        {/* Bloque Email */}
        <a 
          href="mailto:al067492@uacam.mx" 
          className={`${styles.puzzleBox} ${styles.boxEmail}`}
          title="Enviar correo a al067492@uacam.mx"
        >
          <FaEnvelope className={styles.icon} />
          <span>Email</span>
          <span className={styles.emailText}>al067492@uacam.mx</span>
        </a>

        {/* Bloque GitHub */}
        <a 
          href="https://github.com/Adalberto67" 
          target="_blank" rel="noopener noreferrer" 
          className={`${styles.puzzleBox} ${styles.boxGithub}`}
        >
          <FaGithub className={styles.icon} />
          <span>GitHub</span>
        </a>

      </div>
    </div>
  );
};

export default Contact;