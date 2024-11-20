import NextLink from 'next/link';
import {LinkEntity} from '../../lib/types';
import {PropsWithChildren} from 'react';

export type Props = {
    className?: string,
    href: string,
    target?:string,
}

export default function NavLink({className, children, href ,target}: PropsWithChildren<Props>) {
    return (
        <NextLink href={href} passHref={true}>
            <a target={`${target?'"_blank':''}`} className={`hover:text-secondary-100 transition-colors duration-300 text-white ${className ?? ''}`} >{children}</a>
        </NextLink>
    );
}