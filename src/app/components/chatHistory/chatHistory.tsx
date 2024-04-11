import { ScanProps } from '@/app/page';
import ChatHistoryContainer from './chatHistoryContainer';

function ChatHistory({ scans }: { scans: ScanProps[] }) {
    return (
        <div>
            {scans.map((scan, index) => (
                <ChatHistoryContainer key={index} date={scan.date}></ChatHistoryContainer>
            ))}
        </div>
    );
}

export default ChatHistory;