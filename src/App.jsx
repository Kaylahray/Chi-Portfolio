import styles from "./App.module.css";
import "@fontsource/outfit";
import "@fontsource/roboto";
// import { About } from "./Components/About/About"
import { Contact } from "./Components/Contact/Contact";
import { Experience } from "./Components/Experience/Experience";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/NavBar/NavBar";
import { Projects } from "./Components/Projects/Projects";

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
