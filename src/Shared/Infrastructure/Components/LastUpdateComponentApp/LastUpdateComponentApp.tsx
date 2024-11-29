import BtnInfoLastUpdate from '@/src/Shared/Infrastructure/Components/LastUpdateComponentApp/BtnInfoLastUpdate';
import type {Locale} from "@/i18n-config.ts";
import { useTranslation } from '@/src/app/i18n';
import {headers} from "next/headers";
import * as cookie from "cookie";

type Props = {
    market: string;
    params: { lng: Locale};
};
export default async function LastUpdateComponentApp({market, params: {lng},}: Props) {
    const {t} = await useTranslation(lng, 'common')
    const headersList = headers()
    const headerCookie = headersList.get('cookie')
    const parsedCookies = headerCookie && cookie.parse(headerCookie);

    let shareOnLastUpdate = true;
    let lastUpdateText = "Last Update";

    // @ts-ignore
    let lastUpdate = parsedCookies?.last_update_cookie;

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
