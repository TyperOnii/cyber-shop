import { NavigationLink } from "@/shared/types/navigation-link";

export const FOOTER_ASSISTANCE_MENU: NavigationLink[] = [
    {
        label: 'Find an order',
        href: '/find-an-order',
    },
    {
        label: 'Terms of delivery',
        href: '/terms-of-delivery',
    },
    {
        label: 'Exchange and return of goods',
        href: '/exchange-and-return-of-goods',
    },
    {
        label: 'Guarantee',
        href: '/guarantee',
    },
    {
        label: 'Frequently asked questions',
        href: '/frequently-asked-questions',
    },
    {
        label: 'Terms of use of the site',
        href: '/terms-of-use-of-the-site',
    },
] as const;