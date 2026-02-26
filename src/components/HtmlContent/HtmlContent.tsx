import type { PropsWithChildren } from "react";

import styles from "./HtmlContent.module.scss";

export const HtmlContent = ({ children }: PropsWithChildren) => {
  return <div className={styles.htmlContent}>{children}</div>;
};
