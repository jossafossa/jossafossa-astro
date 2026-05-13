import type { PropsWithChildren, ReactElement } from "react";
import styles from "./Page.module.scss";

const Main = ({ children }: PropsWithChildren) => {
  return <main className={styles.main}>{children}</main>;
};

const Page = ({ children }: PropsWithChildren) => {
  return <div className={styles.page}>{children}</div>;
};

Page.Main = Main;

export { Page };
