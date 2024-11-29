import Link from "next/link";
import styles from './PaginationComponentAppAll.module.css';
import PaginationArrow from "@/src/Shared/Infrastructure/Design-components/PaginationArrowAll";
import { getAndConvertLocaleString } from "@/src/Shared/Domain/PaginationLocaleString";

type Props = {
    total: number;
    limit: number;
    offset: number;
    copy?: string;
    url?: string;
    letter?: string;
};
export default  function PaginationComponentAppAll({total, limit, offset, copy, url, letter}: Props) {
    const getPaginationNumbers = ({ total, limit, offset }: Props): number[] => {
        const totalPages = Math.ceil(total / limit);
        const currentPage = Math.floor(offset / limit) + 1;
    
        const paginationRange = 3; 
        const maxPages = paginationRange * 2 + 1;
    
        let rangeStart = Math.max(currentPage - paginationRange, 1);
        let rangeEnd = Math.min(rangeStart + maxPages - 1, totalPages);

        rangeStart = Math.max(rangeEnd - maxPages + 1, 1);
    
        const pages: number[] = [];
        for (let i = rangeStart; i <= rangeEnd; i++) {
            pages.push(i);
        }
    
        return pages;
    };
    const currentPage = Math.floor(offset / limit) + 1;

    const pages = getPaginationNumbers({total, limit, offset});
    const extremeLeftHref = `${process.env.NEXT_PUBLIC_URL}${url}${letter &&letter !== 'A' ? `?startsWith=${letter}` : ''}` 
    
    return (
        <div className={styles.content}>
            <span className={styles.copy}> {getAndConvertLocaleString(copy || '') || copy} </span>
                <div className={styles.links}>
                    <div className={`${styles.extremeArrow} ${offset === 0 && styles.extremeArrowInactive}`}>
                        <a href={extremeLeftHref} aria-label="First Page" aria-disabled={offset === 0}
                        className={offset === 0 ? 'pointer-events-none' : ''} >
                            <PaginationArrow active={offset !== 0} position={'left'}/>
                        </a>
                    </div>
                    {pages.map(pageNum=>{ 
                        const href = pageNum === 1 && letter === "A" ? 
                        `${url}` :
                        letter && pageNum === 1 ? `${url}?startsWith=${letter}`: 
                        letter && pageNum !== 1 ? `${url}?startsWith=${letter}&limit=${limit}&offset=${(pageNum - 1) * limit}`
                        : pageNum === 1 
                        ? `${url}`
                        : `${url}${url?.includes('?') ? '&' : '?'}limit=${limit}&offset=${(pageNum - 1) * limit}`;
                        
                        return <a  href={href} 
                            aria-label="First Page" key={pageNum}
                            className={`${pageNum === currentPage ? styles.activePageNum : ''} ${styles.pageNum}`}>
                            {pageNum}
                        </a>
                    })}
                    <div className={`${styles.extremeArrow} ${total - offset < limit && styles.extremeArrowInactive}`}>
                        <a aria-disabled={total - offset < limit} 
                        href={`${url}${url?.includes('?') ? '&' : '?'}limit=${limit}&offset=${Math.ceil(total / limit) === 0 ? total - limit : Math.floor(total / limit) * limit}`} 
                        aria-label="Last Page"
                        className={total - offset < limit ? 'pointer-events-none' : ''} 
                        >
                            <PaginationArrow active={total - offset > limit} position={'right'}/>
                        </a>
                    </div>
                </div>
        </div>
    );
}
