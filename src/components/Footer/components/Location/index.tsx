import styles from "../../styles.module.css";

export function Location() {
  return (
    <ul className={styles.rodape__lista}>
      <li className={styles["contact__details--item"]}>Location</li>
      <li className={styles["rodape__lista--item"]}>355 Tudor Vladimirescu</li>
      <li className={styles["rodape__lista--item"]}>
        Ilfov, Domnești, București
      </li>
    </ul>
  );
}
