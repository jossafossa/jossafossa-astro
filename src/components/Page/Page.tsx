import type { PropsWithChildren, ReactElement } from "react";
import styles from "./Page.module.scss";

type PageProps = {
  header: ReactElement;
  footer: ReactElement;
};

export const Page = ({
  children,
  header,
  footer,
}: PropsWithChildren<PageProps>) => {
  return (
    <div className={styles.page}>
      {header}
      <main className={styles.main}>{children}</main>
      {footer}
    </div>
  );
};
