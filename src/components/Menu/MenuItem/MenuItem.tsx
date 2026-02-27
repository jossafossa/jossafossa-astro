import type { PropsWithChildren } from "react";
import { Link } from "../../Link/Link";

type MenuItemProps = {
  href: string;
  active: boolean;
};

export const MenuItem = ({
  children,
  href,
  active,
}: PropsWithChildren<MenuItemProps>) => {
  return (
    <li>
      {active ? <span>{children}</span> : <Link href={href}>{children}</Link>}
    </li>
  );
};
