import { Logo } from '@/shared/components/logo/logo';
import s from './footer.module.scss';
import { FOOTER_SERVICES_MENU } from '../const/services-menu';
import Link from 'next/link';
import { FOOTER_ASSISTANCE_MENU } from '../const/assistance-menu';
import { FOOTER_SOCIAL_LINKS_MENU } from '../const/social-links-menu';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className='container'>
                <div className={s.inner}>
                    
                    <div className={s.innerTop}>
                        <div className='flex flex-col gap-y-[24px]'>
                            <Logo/>
                            <p>
                                We are a residential interior design firm located in Portland. Our boutique-studio offers more than
                            </p>
                        </div>

                        <nav>
                            <ul className={s.list}>
                                <li>Services</li>
                                {FOOTER_SERVICES_MENU.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <nav>
                            <ul className={s.list}>
                                <li>Assistance to the buyer</li>
                                {FOOTER_ASSISTANCE_MENU.map(({ label, href }) => (
                                    <li key={label}>
                                        <Link href={href}>{label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className={s.innerBot}>
                        <nav>
                            <ul className={s.socialLinksList}>
                                {FOOTER_SOCIAL_LINKS_MENU.map(({ icon, href }) => (
                                    <li key={icon}>
                                        <Link href={href}>
                                            <Image src={icon || ''} width={16} height={16} alt={icon || ''}/>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}