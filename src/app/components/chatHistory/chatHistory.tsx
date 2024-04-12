import { ScanProps } from '@/app/page';
import Scan from './scan';

interface ChatHistoryProps {
    scans: ScanProps[];
    selectedIndex: number;
}

function ChatHistory({ scans, selectedIndex }: ChatHistoryProps) {
    return (
        <div>
            {scans.map((scan, index) => (<Scan key={index} date={scan.date} index={index} selectedIndex={selectedIndex}></Scan>))}
        </div>
    );
}

export default ChatHistory;