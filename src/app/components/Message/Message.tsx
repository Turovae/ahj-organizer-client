import React from 'react';
import './message.css';

interface MessageProps {
  id: number
  title: string
  content: string
  timestamp: number
  isUser: boolean
}

function Message ({ message }: { message: MessageProps }): React.ReactElement {
  return (
    <div className='message-wrapper'>
      <div className={message.isUser ? 'message message-user' : 'message'}>
        {message.title.length > 0 && <div className='message-title'>{message.title}</div>}
        <div className='message-content'>{message.content}</div>
        <div className='message-timestamp'>{message.timestamp}</div>
      </div>
    </div>
  );
}

export default Message;
export type { MessageProps };
