import type { PropsWithChildren } from "react";

import styles from "./Section.module.scss";

export const Section = ({ children }: PropsWithChildren) => {
  return <section className={styles.section}>{children}</section>;
};
