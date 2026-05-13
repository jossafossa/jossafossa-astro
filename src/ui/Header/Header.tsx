import type { PropsWithChildren } from "react";
import { Container } from "../Container";
import styles from "./Header.module.scss";

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.header}>
      <Container>
        <header className={styles.inner}>{children}</header>
      </Container>
    </div>
  );
};
