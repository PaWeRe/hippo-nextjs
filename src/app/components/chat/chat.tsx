import { ScanProps } from '@/app/page';
import ChatContainer from './chatContainer';

function Chat({ scan }: { scan: ScanProps }) {
    return (
        <div>
            {scan.messages.map((message) => <ChatContainer message={message.message} isBot={message.isBot}></ChatContainer>)}
        </div>
    )
}

export default Chat;