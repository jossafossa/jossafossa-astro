import type { PropsWithChildren } from "react";
import styles from "./Menu.module.scss";
import { MenuItem } from "./MenuItem";

const Menu = ({ children }: PropsWithChildren) => {
  return (
    <nav>
      <ul className={styles.list}>{children}</ul>
    </nav>
  );
};

Menu.Item = MenuItem;

export { Menu };
