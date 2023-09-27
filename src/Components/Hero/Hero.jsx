import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.flex}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hi, I&apos;m Chioma</h1>
          <p className={styles.description}>
            I&apos;m a frontend web developer with 6 months of experience using
            ReactJs and VueJs. Reach out for more Enquires!
          </p>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
        <div className={styles.ImgDiv}>
          <img
            src={getImageUrl("about/hero.jpg")}
            alt="Hero image of me"
            className={styles.heroImg}
          />
        </div>
      </div>
      {/* <div className={styles.topBlur} /> */}
      {/* <div className={styles.bottomBlur} /> */}
    </section>
  );
};
