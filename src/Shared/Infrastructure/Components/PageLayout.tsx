"use client"

import {ReactNode} from 'react';
import {useTranslation} from '@/src/app/i18n/client';
import type {Locale} from "@/i18n-config.ts";

type Props = {
    children?: ReactNode;
    params: { lng: Locale };
};


function PageLayout({ children, params: { lng } }: Props) {
    const {t} = useTranslation(lng, 'common')

    return (
        <>
            {children}
        </>
    )
}

export default PageLayout;
