import cozonac1 from "../../assets/images/cozonac1.png";

import styles from "./styles.module.css";

export function Banner() {
  return (
    <section className={styles.banner} id="banner">
      <img className={styles.banner__img} src={cozonac1} alt="" />
      <h2 className={styles.banner__title}>Făcut cu dragoste</h2>
    </section>
  );
}
