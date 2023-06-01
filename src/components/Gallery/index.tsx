import cx from "classnames";

import styles from "./styles.module.css";

export type GalleryImage = {
  img: string;
  alt: string;
};

type GalleryProps = {
  title?: string;
  images: GalleryImage[];
};

export function Gallery({ title = "Galerie", images }: GalleryProps) {
  return (
    <section className={styles.servicii} id="galerie">
      <h2 className={styles.servicii__title}>{title}</h2>

      <div className={styles.servicii__container}>
        {images.map(({ img, alt }) => (
          <img
            key={alt}
            src={img}
            alt={alt}
            className={cx(styles.servicii__img)}
          />
        ))}
      </div>
    </section>
  );
}
