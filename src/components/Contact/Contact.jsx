import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div  className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} width={38} height={38} alt="Email icon" />
          <a href="mailto:ajays2003s12@email.com">ajays2003s12@gmail
          .com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            width={38} height={38} 
          />
          <a href="https://www.linkedin.com/in/ajay-s-78b527224/">linkedin.com/ajay</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} width={38} height={38}  alt="Github icon" />
          <a href="https://github.com/Ajay-droid23">github.com/Ajay-droid23</a>
        </li>
      </ul>
      
    </footer>
  );
};
