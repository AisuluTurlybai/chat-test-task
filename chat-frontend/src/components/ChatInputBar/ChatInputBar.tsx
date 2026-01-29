import type { FC, ChangeEvent } from 'react';
import micIcon from '../../assets/microphone.svg';
import caretIcon from '../../assets/caret-right-thin.svg';
import './ChatInputBar.css';
import type { TChatInputBarProps } from './type';

export const ChatInputBar: FC<TChatInputBarProps> = ({
  value,
  onChange,
  onSend,
  disabled,
  onVoiceInput,
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    onChange(e.target.value);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Enter') onSend();
  };

  return (
    <div className="chat-input">
      <button
        className="chat-input__mic"
        type="button"
        aria-label="Voice input"
        onClick={onVoiceInput}
        disabled={disabled}
      >
        <img
          src={micIcon}
          alt=''
          className='chat-input__mic-icon'
        />
      </button>

      <input
        className="chat-input__field"
        type="text"
        placeholder="Ask whatever you want"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        disabled={disabled}
      />

      <button 
        className='chat-input__send'
        type='button'
        aria-label='Send'
        onClick={onSend}
        disabled={disabled}
      >
        <img
          src={caretIcon}
          alt=''
          className='chat-input__mic-icon'
        />
      </button>
    </div>
  );
};