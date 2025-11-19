// src/components/Navbar/Navbar.jsx

import React from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo}>Adalberto Pech</a>
        <div className={styles.links}>
          <a href="#home">Hogar</a>
          <a href="#about">Acerca de</a>
          <a href="#projects">Proyectos</a>
          <a href="#contact">Contacto</a>
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Navbar;