import type { PropsWithChildren } from "react";
import styles from "./Body.module.scss";

export const Body = ({ children }: PropsWithChildren) => {
  return <body className={styles.body}>{children}</body>;
};
