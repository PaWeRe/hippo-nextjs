import styles from './chatHistory.module.css'
import ChatHistoryContainer from './chatHistoryContainer';

function ChatHistory() {
    return(
        <div>
            <ChatHistoryContainer></ChatHistoryContainer>
            <ChatHistoryContainer></ChatHistoryContainer>
            <ChatHistoryContainer></ChatHistoryContainer>
        </div>
    )
}

export default ChatHistory;