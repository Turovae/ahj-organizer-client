import React from 'react';
import './message.css';

interface MessageProps {
  id: number
  title: string
  content: string | File
  timestamp: number
  isUser: boolean
}

function WrapLinks ({ msg }: { msg: string }): React.ReactElement {
  const res: Array<string | HTMLElement> = [];
  const pattern = /((?:https?:\/\/|ftps?:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,})|(\n+|(?:(?!(?:https?:\/\/|ftp:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,}).)+)/gim;

  msg.replace(pattern, (m, link, text) => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    res.push((link) ? <a href={(link[0] === 'w' ? '//' : '') + link} key={res.length} target='_blank'>{link}</a> : text);
    return '';
  });

  return <>{res}</>
}

function Message ({ message }: { message: MessageProps }): React.ReactElement {
  return (
    <div className='message-wrapper'>
      <div className={message.isUser ? 'message message-user' : 'message'}>
        {message.title.length > 0 && <div className='message-title'>{message.title}</div>}
        {/* <div className='message-content'><WrapLinks msg={message.content} /></div> */}
        {/* <div className='message-content'>{message.content}</div> */}
        <div className='message-content'>
          {
            (typeof message.content === 'string')
              ? <WrapLinks msg={message.content} />
              : <div>{message.content.name}</div>
          }
        </div>
        <div className='message-timestamp'>{message.timestamp}</div>
      </div>
    </div>
  );
}

export default Message;
export type { MessageProps };
