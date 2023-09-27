import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:myemail@email.com">myemail@email.com</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/m/in/chioma-christopher-6a539723a">
            linkedin.com/myname
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Kaylahray">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
