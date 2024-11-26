import style from './FilterAZ09.module.css'
import Link from "next/link";

type Props = {
    active?: string | number;
    url?: string;
    isEtf?: boolean;
};

export default function FilterAZ09 ({active, url, isEtf} : Props) {
    return (
        <div className="w-full text-center flex justify-center flex-column items-center">
            <span className="block font-d-graphikMedium font-medium justify-center sm:w-[630px] mb-[10px] text-[15px]">
                {isEtf ? 'ETFs ' : 'Stocks '} A-Z
            </span>
            <div className={`w-full flex justify-center sm:w-[630px] flex-wrap gap-y-[8px] gap-x-[7px] ${style.azFiltersContainer}`}>
                {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((el,index)=>(
                    <a href={`${process.env.NEXT_PUBLIC_URL}${url}${el !== 'A' ? `?startsWith=${el}` : ''}`} key={index} 
                    className={`w-[32px] h-[32px] rounded-[4px] border border-solid border-[#D8D8D8] flex items-center justify-center cursor-pointer  ${active === el && style.activeAlphabetFilter}`}>
                        {el}
                    </a>
                ))}
                <a href={`${process.env.NEXT_PUBLIC_URL}${url}?startsWith=0-9`} className={`w-[32px] sm:w-[42px] h-[32px] mr-[7px] rounded-[4px] border border-solid border-[#D8D8D8] flex items-center justify-center cursor-pointer ${active === '0-9' && style.activeAlphabetFilter}`}>
                    0-9
                </a>
            </div>
        </div>
    )
}
