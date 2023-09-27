import styles from "./Contact.module.css";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
// import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:chiomachristopher91@email.com">
            <AiOutlineMail />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/m/in/chioma-christopher-6a539723a">
            <BsLinkedin />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/Kaylahray">
            <AiFillGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};
