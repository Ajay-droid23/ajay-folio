import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li data-aos="fade-right" data-aos-duration="1000" className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText1}>
              <h3>Frontend Dev</h3>
              <p>
              I'm a frontend developer proficient in developing responsive and finely-tuned websites.
              </p>
            </div>
          </li>
          <li data-aos="fade-right" data-aos-duration="2000" className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem-Solving</h3>
              <p>
              Crafting efficient algorithms to tackle complex data structures <br/> and algorithms challenges
              </p>
            </div>
          </li>
          <li data-aos="fade-right" data-aos-duration="2500" className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.topBlur} />
   
    </section>
  );
};
