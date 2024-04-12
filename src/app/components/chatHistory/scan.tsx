import styles from './scan.module.css'

interface ContainerProps {
    date: String;
}

function Scan({ date }: ContainerProps) {
    return(
        <div className={styles.container}>
            <div>{date}</div>
        </div>
    )
}

export default Scan;