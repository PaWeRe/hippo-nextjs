import styles from './chatHistoryHeader.module.css'

function ChatHistoryHeader() {
    return (
        <div>
            <div className={styles.historyHeader}>
                <div className={styles.headerTitle}>HIPPO</div>
                <div className={styles.headerSubTitle}>Version 1.0</div>
            </div>
            <div className={styles.headerDivider}></div>
        </div>
    )
}

export default ChatHistoryHeader;