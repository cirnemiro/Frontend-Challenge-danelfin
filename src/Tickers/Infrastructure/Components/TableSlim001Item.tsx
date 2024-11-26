import React from "react";
import styles from './TableSlim001Item.module.css';

type Props = {
    children: React.ReactNode;
    key:any
}

export const TableSlim001Item = ({children} : Props) => {
    return (
        <li className={styles.content}>
            {children}
        </li>
    );
};

export default TableSlim001Item
