// src/pages/About.tsx
import React from 'react';
import styles from './About.module.css'; // Create an About.module.css for styling

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>About Us</h1>
      <p>
        Welcome to my website! I'm Jessy Gjerek, a passionate developer
        dedicated to creating awesome projects. I specialize in full-stack
        development and love turning ideas into real products.
      </p>
    </div>
  );
};

export default About;
