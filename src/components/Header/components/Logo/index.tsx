import { Link } from "react-router-dom";
import logoRemovedPreview from "../../../../assets/images/logo-removebg-preview.png";

import styles from "./styles.module.css";

export function Logo() {
  return (
    <Link to="/">
      <img className={styles.logo} src={logoRemovedPreview} alt="Logo" />
    </Link>
  );
}
