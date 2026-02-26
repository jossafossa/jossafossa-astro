import type { PropsWithChildren } from "react";
import styles from "./Paragraph.module.scss";

export const Paragraph = ({ children }: PropsWithChildren) => {
  return <p className={styles.paragraph}>{children}</p>;
};
