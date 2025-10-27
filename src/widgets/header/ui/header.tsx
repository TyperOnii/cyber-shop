'use client'

import Image from 'next/image';
import s from './header.module.scss';
import { HEADER_MAIN_NAV_MENU, HEADER_SECONDARY_NAV_MENU } from '../const/header-nav-menu';
import Link from 'next/link';
import { Logo } from '@/shared/components/logo/logo';
import { usePathname } from 'next/navigation';
import { SearchInput } from '@/shared/components/search-input/search-input';

export const Header = () => {
    const pathname = usePathname();

    return (
        <header className={s.header}>
            <div className='container'>
                <div className={s.inner}>
                    <Logo/>

                    <SearchInput/>

                    <nav>
                        <ul className={s.mainMenuList}>
                            {HEADER_MAIN_NAV_MENU.map(({ label, href }) => (
                                <li 
                                    className={s.mainMenuListItem} 
                                    key={label} 
                                    style={{ opacity: href === pathname ? 1 : .3 }}
                                >
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav>
                        <ul className={s.secondaryMenuList}>
                            {HEADER_SECONDARY_NAV_MENU.map(({ icon, href, alt }) => (
                                <li key={icon}>
                                    <Link href={href}>
                                        <Image src={icon || ''} width={32} height={32} alt={alt || ''}/>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>
            </div>
        </header>
    )
}