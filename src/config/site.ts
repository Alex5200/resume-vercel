export interface NavItem {
  label: string;
  href: string;
}

export interface ItemTool {
  label: string;
}

export const siteConfig = {
  name: "My App",
  description: "Best app ever",
  navItems: [
    { label: "Главная", href: "/" },
    { label: "О нас", href: "/about" },
    { label: "Блог", href: "/blog" },
  ] satisfies NavItem[],
  navMenuItems: [
    { label: "Profile" },
    { label: "Dashboard" },
    { label: "Projects" },
    { label: "Team" },
    { label: "Calendar" },
    { label: "Settings" },
    { label: "Help & Feedback" },
    { label: "Logout" },
  ] satisfies ItemTool[],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
