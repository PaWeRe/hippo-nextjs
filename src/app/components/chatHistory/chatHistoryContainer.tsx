import styles from './chatHistoryContainer.module.css'

interface ContainerProps {
    date: String;
}

function ChatHistoryContainer({ date }: ContainerProps) {
    return(
        <div className={styles.container}>
            <div>{date}</div>
        </div>
    )
}

export default ChatHistoryContainer;