import styles from "./styles.module.css";

type BannerProps = {
  img: string;
  text: string;
};

export function Banner({ img, text }: BannerProps) {
  return (
    <section className={styles.banner} id="banner">
      <img className={styles.banner__img} src={img} alt="" />
      <h2 className={styles.banner__title}>{text}</h2>
    </section>
  );
}
