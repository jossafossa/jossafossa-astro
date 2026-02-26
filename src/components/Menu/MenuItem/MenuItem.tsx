import type { PropsWithChildren } from "react";
import { Link } from "../../Link/Link";

type MenuItemProps = {
  href: string;
};

export const MenuItem = ({
  children,
  href,
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  );
};
