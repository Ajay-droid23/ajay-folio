import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div  className={styles.content}>
        <h1 data-aos="fade-right" data-aos-duration="1000" className={styles.title}><span className={styles.wel}>Hi, I'm </span> <span className={styles.name}>AJAY</span></h1>
        <p  data-aos="fade-right" data-aos-duration="2000" className={styles.description}>
        
        Developer with a growing proficiency in data structures and algorithms, adept at crafting intuitive user interfaces and solving complex problems efficiently.
        </p>
        <a href="../../../assets/hero/my-resume.pdf" download="my-resume.pdf" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img  data-aos="fade-up" data-aos-duration="1000"
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      <div className={styles.btopBlur} />
      <div className={styles.bbottomBlur} />
    </section>
  );
};
