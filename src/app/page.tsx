'use client'

import { useState } from 'react';
import Chat from './components/chat/chat';
import { MessageProps } from './components/chat/message';
import ChatHistory from './components/chatHistory/chatHistory';
import ChatHistoryFooter from './components/chatHistory/chatHistoryFooter';
import ChatHistoryHeader from './components/chatHistory/chatHistoryHeader';
import ScanImage from './components/scanImage';
import TextInput from './components/textInput';
import styles from './page.module.css'

export interface ScanProps {
  date: Date;
  messages: MessageProps[];
  // TODO: add images
}

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const exampleScans: ScanProps[] = [
    {
      date: new Date(2024, 4, 12),
      messages: [
        { message: "It seems you could have clinically-significant prostate cancer. You have a PI-RADS score of 5, and we could observe a 10mm lesion in the anterior right base region of your prostate. Also your prostate seems to be mildly enlarge with a Volume of XY ml. Would you like a deeper explanation and simpler terms? Afterwards it would be good to schedule a checkup appointment with a Radiologist nearby to discuss the situation. Good luck!", isBot: true },
        { message: "Yes, please tell me more about it!", isBot: false }
      ]
    },
    {
      date: new Date(2023, 2, 1),
      messages: [
        { message: "Biopsy results confirm the presence of cancer cells.", isBot: false },
        { message: "You're not alone in this, we'll support you through it.", isBot: true },
        { message: "Staging process begins to determine the extent of cancer spread.", isBot: false }
      ]
    },
    {
      date: new Date(2021, 11, 17),
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
          <ChatHistoryHeader></ChatHistoryHeader>
          <ChatHistory scans={exampleScans} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}></ChatHistory>
        </div>
        <ChatHistoryFooter></ChatHistoryFooter>
      </div>
      <div className={styles.content}>
        <div className={styles.chat}>
          <Chat scan={exampleScans[selectedIndex]}></Chat>
          <div>
            <TextInput></TextInput>
          </div>
        </div>
        <div className={styles.diagnosis}>
          <ScanImage></ScanImage>
          <div className={styles.importExport}>
            <div>
              <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"/></svg>
            </div>
            <div>
              <svg fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.71,7.71,11,5.41V15a1,1,0,0,0,2,0V5.41l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-4-4a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-4,4A1,1,0,1,0,8.71,7.71ZM21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Z" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
