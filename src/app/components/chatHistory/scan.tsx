'use client'

import styles from './scan.module.css'

interface ContainerProps {
    date: Date;
    isSelected: boolean;
    onClick: () => void;
}

function Scan({ date, isSelected, onClick }: ContainerProps) {
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace("/", ".").replace("/", ".");

    return (
        <div className={styles.container} onClick={() => onClick()}>
            <div className={`${isSelected ? styles.containerSelected : styles.containerUnselected}`}>
                <div>{formattedDate}</div>
            </div>
        </div>
    )
}

export default Scan;