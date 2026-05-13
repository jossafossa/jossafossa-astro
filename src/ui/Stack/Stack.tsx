import type { PropsWithChildren } from "react";

import styles from "./Stack.module.scss";
import classNames from "classnames";

type StackProps = {
  vertical?: true;
  horizontal?: true;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "space-between";
};

export const Stack = ({
  children,
  vertical,
  horizontal,
  align,
  justify,
}: PropsWithChildren<StackProps>) => {
  return (
    <div
      className={classNames(
        styles.stack,
        vertical && styles.vertical,
        horizontal && styles.horizontal,
        align && styles[`align-${align}`],
        justify && styles[`justify-${justify}`],
      )}
    >
      {children}
    </div>
  );
};
