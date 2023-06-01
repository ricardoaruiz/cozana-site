import { Location } from "./components/Location";
import { Contact } from "./components/Contact";
import { Follow } from "./components/Follow";

import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.rodape} id="contact">
      <h4 className={styles.rodape__titulo}>Cozona Home</h4>

      <div className={styles.rodape__container}>
        <Location />
        <Contact />
        <Follow />
      </div>

      {/* Made by */}
      <p className={styles.made}>
        Made by <span>Tayna!</span>
      </p>
    </footer>
  );
}
