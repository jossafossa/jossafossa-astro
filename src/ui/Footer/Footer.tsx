import type { PropsWithChildren } from "react";
import { Container } from "../Container";
import styles from "./Footer.module.scss";

export const Footer = ({ children }: PropsWithChildren) => {
  return (
    <footer className={styles.footer}>
      <Container>{children}</Container>
    </footer>
  );
};
