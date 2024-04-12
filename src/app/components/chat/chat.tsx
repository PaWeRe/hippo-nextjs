import { ScanProps } from '@/app/page';
import Message from './message';

function Chat({ scan }: { scan: ScanProps }) {
    return (
        <div>
            {scan.messages.map((message) => <Message message={message.message} isBot={message.isBot}></Message>)}
        </div>
    )
}

export default Chat;