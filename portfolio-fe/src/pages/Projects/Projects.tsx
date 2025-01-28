// src/pages/Portfolio.tsx
import React from 'react';
import styles from './Projects.module.css'; // Create a Portfolio.module.css for styling

const Projects = () => {
  return (
    <div className={styles.portfolioContainer}>
      <h1>My Portfolio</h1>
      <div className={styles.projects}>
        <div className={styles.projectCard}>
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
          <p>Link to github</p>
        </div>
        <div className={styles.projectCard}>
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
          <p>Link to github: </p>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};

export default Projects;
