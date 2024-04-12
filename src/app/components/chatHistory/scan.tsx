'use client'

import styles from './scan.module.css'

interface ContainerProps {
    date: Date;
    isSelected: boolean;
    onClick: () => void;
}

function Scan({ date, isSelected, onClick }: ContainerProps) {
    const formattedDate = `${('0' + date.getDate()).slice(-2)}.${('0' + (date.getMonth())).slice(-2)}.${date.getFullYear()}`;

    return (
        <div className={styles.container} onClick={() => onClick()}>
            <div className={`${isSelected ? styles.containerSelected : styles.containerUnselected}`}>
                <div>{formattedDate}</div>
            </div>
        </div>
    )
}

export default Scan;