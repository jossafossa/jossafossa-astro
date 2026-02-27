import type { PropsWithChildren } from "react";
import { Link } from "../../Link";

import styles from "./MenuItem.module.scss";

type MenuItemProps = {
  href: string;
  active: boolean;
};

export const MenuItem = ({
  children,
  href,
  active,
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <li>
      {active ? (
        <span className={styles.active}>{children}</span>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </li>
  );
};
