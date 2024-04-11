import Chat from './components/chat/chat';
import Scan from './components/scan';
import TextInput from './components/textInput';
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.chatHistory}>
        <div className={styles.historyHeader}>
          <div className={styles.headerTitle}>HIPPO</div>
          <div className={styles.headerSubTitle}>Version 1.0</div>
        </div>
        <div className={styles.headerDivider}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.chat}>
          <Chat></Chat>
          <TextInput></TextInput>
        </div>
        <div className={styles.diagnosis}>
          <Scan></Scan>
        </div>
      </div>
    </div>
  );
}
