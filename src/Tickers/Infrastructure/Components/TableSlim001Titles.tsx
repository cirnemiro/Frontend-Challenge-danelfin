import React from "react";
import styles from './TableSlim001Titles.module.css';

type Props = {
    children: React.ReactNode
}

export const TableSlim001Titles = ({ children }: Props)  => {
    return (
        <div className={`${styles.content} rounded-t-radur-md title-table`}>
            {children}
        </div>
    );
};

export default TableSlim001Titles
