
import type { FC } from 'react';
import './ChatPage.css';
import { ChatHeader } from '../components/ChatHeader';
import { ChatInputBar } from '../components/ChatInputBar';
import { useChat } from '../hooks/useChat';

export const ChatPage: FC = () => {
  const {
    message,
    setMessage,
    reply,
    loading,
    error,
    source,
    sendMessage,
    onVoiceInput
  } = useChat();

  return (
    <div className="page">
      <ChatHeader />

    <div className="chat-content">
      {loading && <p className="chat-status chat-status--loading">Loading...</p>}
      {error && <p className="chat-status chat-status--error">{error}</p>}

      {reply && (
        <div className="chat-reply">
          <p className="chat-reply__text">{reply}</p>
          {source && (
            <small className="chat-reply__source">
              source: {source}
            </small>
          )}
        </div>
      )}
    </div>

      <div className="chat-input-wrapper">
        <ChatInputBar
          value={message}
          onChange={setMessage}
          onSend={sendMessage}
          onVoiceInput={onVoiceInput} 
          disabled={loading}
        />  
      </div>
    </div>
  );
};