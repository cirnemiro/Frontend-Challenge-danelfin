import React from "react";
import styles from './TableSlimItem.module.css';

type Props = {
    children: React.ReactNode;
    key:any
}

export const TableSlimItem = ({children} : Props) => {
    return (
        <li className={styles.content}>
            {children}
        </li>
    );
};

export default TableSlimItem
