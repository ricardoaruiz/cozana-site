import styles from "./styles.module.css";

type DescriptionProps = {
  title: string;
  text: string;
};

export function Description({ title, text }: DescriptionProps) {
  return (
    <>
      <section className={styles.despre} id="despre">
        <h2 className={styles.despre__title}>{title}</h2>
        <p className={styles.despre__description}>{text}</p>
      </section>
    </>
  );
}
