'use client'

import clsx from 'clsx';
import s from './search-input.module.scss';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ChangeEventHandler } from 'react';

interface SearchInputProps {
    className?: string,
    placeholder?: string,
}

export const SearchInput = (props: SearchInputProps) => {
    const { className, placeholder='Search' } = props;
    const pathname = usePathname();
    const params = useSearchParams();
    const { replace } = useRouter();

    const styles = clsx(s.input, className);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const term = e.target.value;
        const searchParams = new URLSearchParams(params);
        if(term) {
            searchParams.set('search', term);
        } else {
            searchParams.delete('search');
        }
        replace([pathname, searchParams.toString()].join('?'))
    }

    return (
        <input 
            onChange={handleChange}
            defaultValue={params.get('search') || ''}
            placeholder={placeholder}
            className={styles} 
            type="search"
        />
    )
}