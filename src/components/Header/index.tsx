import { Logo } from "./components/Logo";
import { ItemMenu, Menu } from "./components/Menu";

import styles from "./styles.module.css";

const MENU_ITEMS: ItemMenu[] = [
  { label: "Despre", href: "#despre", style: "albastru" },
  { label: "Galerie", href: "#galerie", style: "galben" },
  { label: "Contact", href: "#contact", style: "rosu" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu items={MENU_ITEMS} />
    </header>
  );
}
