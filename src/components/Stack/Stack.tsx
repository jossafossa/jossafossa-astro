import type { PropsWithChildren } from "react";

import styles from "./Stack.module.scss";
import classNames from "classnames";

type StackProps = {
  vertical?: true;
  horizontal?: true;
};

export const Stack = ({
  children,
  vertical,
  horizontal,
}: PropsWithChildren<StackProps>) => {
  return (
    <div
      className={classNames(
        styles.stack,
        vertical && styles.vertical,
        horizontal && styles.horizontal,
      )}
    >
      {children}
    </div>
  );
};
