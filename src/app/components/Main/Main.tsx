import React from 'react';
import Message, { type MessageProps } from '../Message/Message';

import './main.css'

function Main ({ messages }: { messages: MessageProps[] }): React.ReactElement {
  return (
    <main className="main">
      {messages.map((message: MessageProps) => <Message key={message.id} message={message} />)}
    </main>
  );
}

export default Main;
