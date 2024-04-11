import Scan from './components/scan';
import TextInput from './components/textInput';
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.chatHistory}></div>
      <div className={styles.content}>
        <div className={styles.chat}>
          <div></div>
          <TextInput></TextInput>
        </div>
        <div className={styles.diagnosis}>
          <Scan></Scan>
        </div>
      </div>
    </div>
  );
}
