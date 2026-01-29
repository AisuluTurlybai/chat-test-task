
import chatIcon from '../../assets/chat-fill.svg';
import type { FC } from 'react';
import './ChatHeader.css';

export const ChatHeader: FC = () => {
  return (
    <div className='chat-header'> 
    <div className="chat-header__icon">
        <img src={chatIcon} alt="" aria-hidden="true" />
      </div>
      <h1 className='chat-header__title'>Hi there!</h1>
      <h2 className='chat-header__subtitle'>What would you like to know?</h2>
      <p className="chat-header__description">
        Use one of the most common prompts below<br />
        or ask your own question
      </p>
    </div>
  );
};
