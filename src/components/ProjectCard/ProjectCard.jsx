import React from 'react';
import styles from './ProjectCard.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { name, description, tags, image, link, github } = project;

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} className={styles.projectImage} />
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.tags}>
          {tags.map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>

        <div className={styles.actions}>
          <a href={link} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.liveButton}`}>
            <FaExternalLinkAlt className={styles.icon} /> 
            Ver
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.githubButton}`}>
            <FaGithub className={styles.icon} /> 
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;