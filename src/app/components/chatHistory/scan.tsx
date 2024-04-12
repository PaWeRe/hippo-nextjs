import styles from './scan.module.css'

interface ContainerProps {
    date: Date;
    index: number;
    selectedIndex: number;
}

function Scan({ date, index, selectedIndex }: ContainerProps) {
    const formattedDate = date.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    }).replace("/", ".").replace("/", ".");

    const selected = (index === selectedIndex) ? true : false;

    return (
        <div className={styles.container}>
            <div className={`${selected ? styles.containerSelected : styles.containerUnselected}`}>
                <div>{formattedDate}</div>
            </div>
        </div>
    )
}

export default Scan;