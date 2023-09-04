import React from 'react';
import './message.css';

interface MessageProps {
  id: number
  content: string | undefined
  timestamp: number
  isUser: boolean
}

function Message ({ message }: { message: MessageProps }): React.ReactElement {
  return (
    <div className='message'>
      <div className='message-content'>{message.content}</div>
      <div className='message-timestamp'>{message.timestamp}</div>
    </div>
  );
}

export default Message;
export type { MessageProps };
