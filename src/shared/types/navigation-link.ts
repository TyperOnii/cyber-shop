import { UrlObject } from "url";

export interface NavigationLink {
    label?: string,
    href: string | UrlObject,
    icon?: string,
}