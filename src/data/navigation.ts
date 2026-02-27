export type NavigationItem = {
  href: string;
  label: string;
};

export const navigation = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/posts/', label: 'Alle Posts' },
    { href: '/authors/', label: 'Authors' },
    { href: '/about/', label: 'About' },
  ],
  footer: [
    // Kan later uitgebreid worden met footer links
  ],
} as const;

