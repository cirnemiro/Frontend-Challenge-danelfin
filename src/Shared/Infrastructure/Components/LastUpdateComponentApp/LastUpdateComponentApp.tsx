import BtnInfoLastUpdate from '@/src/Shared/Infrastructure/Components/LastUpdateComponentApp/BtnInfoLastUpdate';
import type {Locale} from "@/i18n-config.ts";
import { useTranslation } from '@/src/app/i18n';
import {headers} from "next/headers";
import axios from "axios";
import * as cookie from "cookie";

type Props = {
    market: string;
    params: { lng: Locale};
};
export default async function LastUpdateComponentApp({market, params: {lng},}: Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = await useTranslation(lng, 'common')
    const headersList = headers()
    const headerCookie = headersList.get('cookie')
    const parsedCookies = headerCookie && cookie.parse(headerCookie);
    let shareOnLastUpdate = true;
    let lastUpdateText = "Last Update";
    // @ts-ignore
    let lastUpdate = parsedCookies?.last_update_cookie;

    if (!lastUpdate) {
        const newDate = new Date();
        const timestamp = newDate.getTime();
        try {
            axios.get(`${process.env.NEXT_PUBLIC_URL_API}getLastMarketUpdate?X-API-KEY=${process.env.NEXT_PUBLIC_API_KEY}&market=${market}&v=${timestamp}`)
                .then((result) => {
                    // setLastUpdate(result.data.last_update);
                    lastUpdate = result.data.last_update;
                });
        } catch (error) {
            console.error('Error request getLastMarketUpdate:', error);
        }
    }

    return (
        <>
            <div className={`explanation-last-update ${shareOnLastUpdate ? "with-share" : ""}`}>
                <span>
                     <span>
                        <img className="explanation-last-update-check" src={process.env.NEXT_PUBLIC_CDN_URL + "/images/icons/checkGreenRound.svg"} alt="green check"/>
                         {lastUpdateText ? lastUpdateText : t('generals.lastupdate')}
                         {lastUpdate}
                     </span>
                    <BtnInfoLastUpdate/>
                </span>
            </div>
        </>
    );
}
