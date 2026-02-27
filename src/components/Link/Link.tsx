import type { PropsWithChildren } from "react";
import styles from "./Link.module.scss";
import classNames from "classnames";

type LinkProps = {
  href: string;
  underlined?: boolean;
};

export const Link = ({
  href,
  children,
  underlined = true,
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      href={href}
      className={classNames(styles.link, !underlined && styles.notUnderlined)}
    >
      {children}
    </a>
  );
};
