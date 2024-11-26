"use client";
import {useState} from "react";
import type {Locale} from "@/i18n-config.ts";
import {useTranslation} from '@/src/app/i18n/client'

type Props = {
    shareOnLastUpdate?: boolean;
    lastUpdateText?: string;
    params: { lng: Locale };
};

export default function Counter({shareOnLastUpdate, lastUpdateText, params: {lng}}: Props) {
    const [showModalDate, setShowModalDate] = useState(false);
    const dateOfTodayFormatted = new Date(Date.now()).toLocaleString('en-US', {year: "numeric", month: "short", day: "numeric"});
    const [lastUpdateToShow, setLastUpdateToShow] = useState(dateOfTodayFormatted);
    const {t} = useTranslation(lng, 'common')

    return (
        <>
        <span>
            <img className="icon-info info-icon-blue-13px"
                 src={process.env.NEXT_PUBLIC_CDN_URL + "/images/icons/info-ico.svg"}
                 alt="info icon"
                 onClick={(e) => setShowModalDate(true)}
            />
        </span>
            {/*<ModalLastUpdate showModal={showModalDate} setShowModal={setShowModalDate} lng={lng}/>*/}
        </>
    )
}

