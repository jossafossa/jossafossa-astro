import { Container } from "../Container";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>&copy; {new Date().getFullYear()} My Blog</Container>
    </footer>
  );
};
