'use client'

import { ScanProps } from '@/app/page';
import Scan from './scan';

interface ChatHistoryProps {
    scans: ScanProps[];
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
}

function ChatHistory({ scans, selectedIndex, setSelectedIndex }: ChatHistoryProps) {

    return (
        <div>
            {scans.map((scan, index) => (<Scan key={index} date={scan.date} isSelected={ index === selectedIndex } onClick={() => setSelectedIndex(index)}></Scan>))}
        </div>
    );
}

export default ChatHistory;