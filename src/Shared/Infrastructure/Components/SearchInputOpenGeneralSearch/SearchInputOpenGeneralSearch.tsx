"use client"

import {useState} from "react";
import {useTranslation} from '@/src/app/i18n/client'
import {Locale} from "@/i18n-config.ts";
// import {useSearchBarInfo} from "@/context/searchBarContext";
import styles from './SearchInputOpenGeneralSearch.module.css';

type Props = {
    params: {
        lng: Locale;
    };
    actual_ticker: string;
};
export default function SearchInputOpenGeneralSearch ({params: {lng},actual_ticker}: Props) {
    const {t} = useTranslation(lng, 'common')
    const [readOnlyInput, setReadOnlyInput] = useState(true);
    // const {setSearchBarOpen} = useSearchBarInfo()

    const openNewSearchBar = (e) => {
        // @ts-ignore
        event.preventDefault()
        // setSearchBarOpen(true)
    }


    return (
        <div className={styles.content}>
            <input
                className={styles.input}
                placeholder={actual_ticker ? actual_ticker : t('navbar.search')}
                autoComplete="off"
                onClick={(e) => openNewSearchBar(e)}
                type="search"
            />
            <img className={styles.imgLupa} src={process.env.NEXT_PUBLIC_CDN_URL + "/images/icons/magnifyingGlassGrey.svg"} alt='image lupa'/>
        </div>
    )
}
