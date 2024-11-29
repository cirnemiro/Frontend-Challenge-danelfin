import React from "react";
import styles from './TableSlimTitle.module.css';

type Props = {
    children: React.ReactNode
}

export const TableSlimTitle = ({ children }: Props)  => {
    return (
        <div className={`${styles.content} rounded-t-radur-md title-table`}>
            {children}
        </div>
    );
};

export default TableSlimTitle
