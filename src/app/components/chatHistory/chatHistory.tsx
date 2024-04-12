import { ScanProps } from '@/app/page';
import Scan from './scan';

function ChatHistory({ scans }: { scans: ScanProps[] }) {
    return (
        <div>
            {scans.map((scan, index) => (<Scan key={index} date={scan.date}></Scan>))}
        </div>
    );
}

export default ChatHistory;