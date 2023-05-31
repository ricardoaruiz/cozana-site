import cx from "classnames";
import styles from "./styles.module.css";

type ItemMenu = {
  label: string;
  href: string;
  style: string;
};

type MenuProps = {
  items: ItemMenu[];
};

export function Menu({ items }: MenuProps) {
  return (
    <nav>
      <ul className={styles.menu__list}>
        {items.map(({ label, href, style }) => {
          return (
            <li className={styles.menu__item}>
              <a className={cx(styles.menu__link, styles[style])} href={href}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
