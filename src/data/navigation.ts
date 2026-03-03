export type NavigationItem = {
  href: string;
  label: string;
};

export const navigation = {
  main: [
    { href: "/posts/", label: "Blog" },
    { href: "/authors/", label: "Authors" },
    { href: "/about/", label: "About" },
  ],
  footer: [],
} as const;
