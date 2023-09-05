import React, { useEffect, useRef } from 'react';
import Message, { type MessageProps } from '../Message/Message';

import './main.css'

function Main ({ messages }: { messages: MessageProps[] }): React.ReactElement {
  const scrollFlag = useRef(null);

  useEffect(() => {
    (scrollFlag.current as unknown as HTMLElement).scrollIntoView();
  }, [messages]);

  return (
    <main className="main">
      {messages.map((message: MessageProps) => <Message key={message.id} message={message} />)}
      <div className='scroll-flag' ref={scrollFlag}></div>
    </main>
  );
}

export default Main;
