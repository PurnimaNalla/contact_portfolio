import React from "react";

import styles from "./Projects.module.css";
export const Projects = () => {
  return (
    <section className={styles.container}>
       <h2 className={styles.title}> Projects</h2> 
        <div className={styles.projects}>
            <p >Travel Website.</p>
            <p>Welcome to Travel Bliss! I'm thrilled to have you here. This website is my passion project, designed to help fellow travelers discover the world's most amazing destinations. Whether you're planning your next big adventure or just daydreaming about far-off places, you've come to the right spot.
            </p>
            < a href="https://youtu.be/ZrY0F-yO4As"> Youtube link</a>
        
        </div>
        <div className={styles.pro}>
            <p> Travel App</p>
            <p>introducing a sleek travel companion designed specifically for navigating Mumbai's bustling streets, providing seamless exploration and convenient access to essential transportation information at your fingertips.</p>
            < a href="https://www.figma.com/design/KwjbD4UIpeZRc12vHPiFG4/Travel-APP-(Community)?m=dev&node-id=0-1&t=8gbd6WfwdviF1tC8-1"> figma</a>
        </div>
        <div className={styles.jects}>
            <p> Lofi design</p>
            <p> This lo-fi app design prototype offers a stripped-down yet intuitive interface, focusing on core functionalities with minimalistic aesthetics, ideal for rapid testing and user feedback iteration in early development stages.</p>
            < a href="https://www.figma.com/design/fEfhUtvlPGzrb2d7kRE1uD/project_01?m=auto&t=l7C76231iNFkXWXx-6"> app design</a>
        </div>
    </section>
  );
  
};
