import type { PropsWithChildren } from "react";
import { Container } from "../Container";
import styles from "./Header.module.scss";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <header className={styles.header}>
      <Container>{children}</Container>
    </header>
  );
};
