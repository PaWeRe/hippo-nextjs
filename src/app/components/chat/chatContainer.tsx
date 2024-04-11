import styles from './chatContainer.module.css'

function ChatContainer() {
    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <div className={styles.profile}></div>
            </div>
            <div>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </div>
        </div>
    )
}

export default ChatContainer;