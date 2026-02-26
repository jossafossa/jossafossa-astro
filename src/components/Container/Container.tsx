import type { PropsWithChildren } from "react";
import styles from "./Container.module.scss";

type ContainerProps = {};

export const Container = ({ children }: PropsWithChildren<ContainerProps>) => {
  return <div className={styles.container}>{children}</div>;
};
