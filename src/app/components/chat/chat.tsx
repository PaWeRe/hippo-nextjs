import { ScanProps } from '@/app/page';
import Message from './message';
import styles from './chat.module.css'

function Chat({ scan }: { scan: ScanProps }) {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                {scan.messages.map((message, index) => <Message key={index} message={message.message} isBot={message.isBot}></Message>)}
            </div>
        </div>
    )
}

export default Chat;