import type { PropsWithChildren } from "react";
import styles from "./CardGrid.module.scss";

export const CardGrid = ({ children }: PropsWithChildren) => {
  return <div className={styles.cardGrid}>{children}</div>;
};
