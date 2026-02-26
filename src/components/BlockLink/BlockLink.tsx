import type { PropsWithChildren } from "react";
import styles from "./BlockLink.module.scss";

type BlockLinkProps = {
  href: string;
};

export const BlockLink = ({
  href,
  children,
}: PropsWithChildren<BlockLinkProps>) => {
  return (
    <div className={styles.blockLink}>
      <a href={href} className={styles.link}></a>
      {children}
    </div>
  );
};
