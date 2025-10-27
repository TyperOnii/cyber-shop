import { NavigationLink } from "@/shared/types/navigation-link";

export const FOOTER_SERVICES_MENU: NavigationLink[] = [
    {
        label: 'Bonus program',
        href: '/bonus-program',
    },
    {
        label: 'Gift-cards',
        href: '/gift-cards',
    },
    {
        label: 'Credit-and-payment',
        href: '/credit-and-payment',
    },
    {
        label: 'Service contracts',
        href: '/service-contracts',
    },
    {
        label: 'Non-cash account',
        href: '/non-cash-account',
    },
    {
        label: 'Payment',
        href: '/payment',
    },
] as const;