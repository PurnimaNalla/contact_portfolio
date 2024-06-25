import React from "react";


import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Purnima Nalla </h1>
            <p> "As a dedicated Information Technology student in my second year of diploma studies, I am fueled by a passion for software development. Committed to learning and applying cutting-edge technologies, I strive to contribute innovative solutions to real-world challenges."</p>
            <a href="mailto:purnimanalla029@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")}alt="Hero image of me" className={styles.heroImg}></img>
        <div className={styles.topBlur}></div>
        <div className={styles.bottomBlur}></div>
    
    
    </section>
    

  
  );
};
