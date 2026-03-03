import { type PropsWithChildren } from "react";

import styles from "./Button.module.scss";

export const Button = ({ children }: PropsWithChildren) => {
  return <button className={styles.button}>{children}</button>;
};
