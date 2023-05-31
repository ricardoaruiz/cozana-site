import logoRemovedPreview from "../../../../assets/images/logo-removebg-preview.png";

import styles from "./styles.module.css";

export function Logo() {
  return (
    <a href="#banner">
      <img className={styles.logo} src={logoRemovedPreview} alt="Logo" />
    </a>
  );
}
