import type { ElementType, PropsWithChildren } from "react";
import styles from "./Heading.module.scss";

type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};
export const Heading = ({
  level,
  children,
}: PropsWithChildren<HeadingProps>) => {
  const Heading = `h${level}` as ElementType;

  return <Heading className={styles.heading}>{children}</Heading>;
};
