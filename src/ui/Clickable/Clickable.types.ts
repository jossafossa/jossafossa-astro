import type { HTMLAttributes } from "astro/types";

export type ClickableProps =
  | (HTMLAttributes<"a"> & { href: string })
  | (HTMLAttributes<"button"> & { href?: never });
