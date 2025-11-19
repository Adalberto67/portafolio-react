import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Hecho en React.
      </p>
      <p>
        &copy; 2025 Adalberto Enai Pech Us - 67492. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;