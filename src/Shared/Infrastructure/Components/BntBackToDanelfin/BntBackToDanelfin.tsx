"use client";
import React from "react";
import {Locale} from "@/i18n-config.ts";
import style from "@/src/Shared/Infrastructure/Components/BntBackToDanelfin/BntBackToDanelfin.module.css";
import Cookies from "js-cookie";
import {useTranslation} from '@/src/app/i18n/client'
import useRouter from "@/hooks/useRouter";
import {usePathname} from "next/navigation";


type Props = {
    params: {
        lng: Locale;
    };
};

export default function BtnInfoLastUpdate({params: {lng}}: Props) {
    const {t} = useTranslation(lng, 'common')
    const router = useRouter()
    const pathname = usePathname()

    const redirection = () => {
        let pageBack = Cookies.get('page_back');
        let url = pageBack && pageBack !== pathname ? pageBack : '/';
        router.push(url)
    };
    return (
        <>
            <button
                className={style.btn}
                onClick={() => redirection()}>
                {t('paymentSuccess.back')}
            </button>
        </>
    )
}

