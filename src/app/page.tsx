import Chat from './components/chat/chat';
import ChatHistory from './components/chatHistory/chatHistory';
import Scan from './components/scan';
import TextInput from './components/textInput';
import styles from './page.module.css'

export interface Message {
  message: string;
  isBot: boolean;
}
export interface ScanProps {
  date: string;
  messages: Message[];
  // TODO: add images
}

export default function Home() {
  const exampleScans: ScanProps[] = [
    {
      date: "2024-04-11",
      messages: [
        { message: "Initial scan results show signs of cancer.", isBot: false },
        { message: "Please don't worry, we're here to help.", isBot: true },
        { message: "Further tests are required for confirmation.", isBot: false }
      ]
    },
    {
      date: "2023-03-26",
      messages: [
        { message: "Biopsy results confirm the presence of cancer cells.", isBot: false },
        { message: "You're not alone in this, we'll support you through it.", isBot: true },
        { message: "Staging process begins to determine the extent of cancer spread.", isBot: false }
      ]
    },
    {
      date: "2022-04-13",
      messages: [
        { message: "Chemotherapy sessions scheduled to begin next week.", isBot: false },
        { message: "Remember to take care of yourself and stay positive.", isBot: true },
        { message: "Regular follow-ups planned to monitor treatment progress.", isBot: false }
      ]
    }
  ];

  return (
    <div className={styles.page}>
      <div className={styles.chatHistory}>
        <div>
          <div className={styles.historyHeader}>
            <div className={styles.headerTitle}>HIPPO</div>
            <div className={styles.headerSubTitle}>Version 1.0</div>
          </div>
          <div className={styles.headerDivider}></div>
          <ChatHistory scans={exampleScans}></ChatHistory>
        </div>
        <div>
          <div className={styles.profilePicture}>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0724 4.02447C15.1063 3.04182 13.7429 2.5 12.152 2.5C10.5611 2.5 9.19773 3.04182 8.23167 4.02447C7.26636 5.00636 6.73644 6.38891 6.73644 8C6.73644 10.169 7.68081 11.567 8.8496 12.4062C9.07675 12.5692 9.3115 12.7107 9.54832 12.8327C8.24215 13.1916 7.18158 13.8173 6.31809 14.5934C4.95272 15.8205 4.10647 17.3993 3.53633 18.813C3.43305 19.0691 3.55693 19.3604 3.81304 19.4637C4.06914 19.567 4.36047 19.4431 4.46375 19.187C5.00642 17.8414 5.78146 16.4202 6.98653 15.3371C8.1795 14.265 9.82009 13.5 12.152 13.5C14.332 13.5 15.9058 14.1685 17.074 15.1279C18.252 16.0953 19.0453 17.3816 19.6137 18.6532C19.9929 19.5016 19.3274 20.5 18.2827 20.5H6.74488C6.46874 20.5 6.24488 20.7239 6.24488 21C6.24488 21.2761 6.46874 21.5 6.74488 21.5H18.2827C19.9348 21.5 21.2479 19.8588 20.5267 18.2452C19.9232 16.8952 19.0504 15.4569 17.7087 14.3551C16.9123 13.7011 15.9603 13.1737 14.8203 12.8507C15.43 12.5136 15.9312 12.0662 16.33 11.5591C17.1929 10.462 17.5676 9.10016 17.5676 8C17.5676 6.38891 17.0377 5.00636 16.0724 4.02447ZM15.3593 4.72553C16.1144 5.49364 16.5676 6.61109 16.5676 8C16.5676 8.89984 16.2541 10.038 15.544 10.9409C14.8475 11.8265 13.7607 12.5 12.152 12.5C11.5014 12.5 10.3789 12.2731 9.43284 11.5938C8.51251 10.933 7.73644 9.83102 7.73644 8C7.73644 6.61109 8.18963 5.49364 8.94477 4.72553C9.69916 3.95818 10.7935 3.5 12.152 3.5C13.5105 3.5 14.6049 3.95818 15.3593 4.72553Z" fill="#000000" />
            </svg>
          </div>
          <div className={styles.profileDivider}></div>
          <div className={styles.profileBottom}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path d="M0 0h48v48h-48z" fill="none" />
                <path d="M38.86 25.95c.08-.64.14-1.29.14-1.95s-.06-1.31-.14-1.95l4.23-3.31c.38-.3.49-.84.24-1.28l-4-6.93c-.25-.43-.77-.61-1.22-.43l-4.98 2.01c-1.03-.79-2.16-1.46-3.38-1.97l-.75-5.3c-.09-.47-.5-.84-1-.84h-8c-.5 0-.91.37-.99.84l-.75 5.3c-1.22.51-2.35 1.17-3.38 1.97l-4.98-2.01c-.45-.17-.97 0-1.22.43l-4 6.93c-.25.43-.14.97.24 1.28l4.22 3.31c-.08.64-.14 1.29-.14 1.95s.06 1.31.14 1.95l-4.22 3.31c-.38.3-.49.84-.24 1.28l4 6.93c.25.43.77.61 1.22.43l4.98-2.01c1.03.79 2.16 1.46 3.38 1.97l.75 5.3c.08.47.49.84.99.84h8c.5 0 .91-.37.99-.84l.75-5.3c1.22-.51 2.35-1.17 3.38-1.97l4.98 2.01c.45.17.97 0 1.22-.43l4-6.93c.25-.43.14-.97-.24-1.28l-4.22-3.31zm-14.86 5.05c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" />
              </svg>

            </div>
            <div>
              <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 471.2 471.2">
                <g>
                  <g>
                    <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
			s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
			S235.019,444.2,227.619,444.2z"/>
                    <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
			s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
			C455.319,239.9,455.319,231.3,450.019,226.1z"/>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.chat}>
          <Chat scan={exampleScans[0]}></Chat>
          <div>
            <TextInput></TextInput>
            <div className={styles.inputHint}>For a final verdict, always contact a professional radiologist.</div>
          </div>
        </div>
        <div className={styles.diagnosis}>
          <Scan></Scan>
        </div>
      </div>
    </div>
  );
}
