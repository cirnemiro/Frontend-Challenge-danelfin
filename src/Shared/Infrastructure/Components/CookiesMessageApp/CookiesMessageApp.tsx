
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Cookies from 'js-cookie';
import styles from './CookiesMessageApp.module.css';

const CookiesMessageApp = () => {
    // const [showConsent, setShowConsent] = useState(undefined);
    // const [existCookie, setExistCookie] = useState(Cookies.get('cookiesAccepted'))
    const {t} = useTranslation('common');

    const cookiesAccepted = (yesOrNo) => {
        Cookies.set('cookiesAccepted', yesOrNo, { path: '/', expires: 365 })
        // setShowConsent(false)
    }

    // if (!existCookie) {
        return <>
            <div className={styles["cookie-consent-container"]}>
                <div>{t('cookieConsent.text')} <Link href="/cookie-policy" legacyBehavior>{t('cookieConsent.cookiePolicy')}</Link> </div>
                <div className="cookie-consent-buttons">
                    <button onClick={() => cookiesAccepted(false)}>{t('cookieConsent.buttonDecline')}</button>
                    <button onClick={() => cookiesAccepted(true)}>{t('cookieConsent.buttonAccept')}</button>
                </div>
            </div>
        </>;
    // } else {
    //     return null
    // }
}

export default CookiesMessageApp
