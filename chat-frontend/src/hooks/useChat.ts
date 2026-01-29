import { useState } from 'react';
import { sendChatMessage } from '../api/chatApi';

export const useChat = () => {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [source, setSource] = useState<'openai' | 'mock' | null>(null);

  const sendMessage = async () => {
    const text = message.trim();
    if (!text) return;

    setLoading(true);
    setError(null);

    try {
      const data = await sendChatMessage({ message: text });
      setReply(data.reply);
      setSource(data.source);
      setMessage('');
    } catch {
      setError('Server error');
    } finally {
      setLoading(false);
    }
  };

  const onVoiceInput = () => {
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setMessage(text);
    };

    recognition.onerror = () => {
      setError('Voice input error');
    };
  };

  return {
    message,
    setMessage,
    reply,
    source,
    loading,
    error,
    sendMessage,
    onVoiceInput,
  };
};