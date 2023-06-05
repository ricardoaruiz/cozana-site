import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./styles.module.css";

export type ItemMenu = {
  label: string;
  href: string;
  style: "albastru" | "galben" | "rosu";
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
              <Link to={href} className={cx(styles.menu__link, styles[style])}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
