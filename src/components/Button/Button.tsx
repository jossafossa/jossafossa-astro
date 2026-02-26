import { type PropsWithChildren } from "react";

import styles from "./Button.module.scss";

export const Button = ({ children }: PropsWithChildren) => {
  const handleClick = () => console.log("hoi");

  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};
