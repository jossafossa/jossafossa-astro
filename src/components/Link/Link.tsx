import type { PropsWithChildren } from "react";
import styles from "./Link.module.scss";

type LinkProps = {
  href: string;
};

export const Link = ({ href, children }: PropsWithChildren<LinkProps>) => {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
};
