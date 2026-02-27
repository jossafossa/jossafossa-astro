export type NavigationItem = {
  href: string;
  label: string;
};

export const navigation = {
  main: [
    { href: "/", label: "Home" },
    { href: "/posts/", label: "All Posts" },
    { href: "/authors/", label: "Authors" },
    { href: "/about/", label: "About" },
  ],
  footer: [],
} as const;
