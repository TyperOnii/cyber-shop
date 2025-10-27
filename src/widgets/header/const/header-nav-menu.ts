import { NavigationLink } from "@/shared/types/navigation-link";

export const HEADER_MAIN_NAV_MENU: NavigationLink[] = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'About',
        href: '/about',
    },
    {
        label: 'Contact Us',
        href: '/contacts',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
] as const;

export const HEADER_SECONDARY_NAV_MENU: NavigationLink[] = [
    {
        icon: '/favorite-icon.svg',
        href: '/',
        alt: 'favorite icon'
    },
    {
        icon: '/cart-icon.svg',
        href: '/',
        alt: 'cart icon'
    },
    {
        icon: '/user-icon.svg',
        href: '/',
        alt: 'profile icon'
    },
] as const;