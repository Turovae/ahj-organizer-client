import React, { type ChangeEvent, useState, type FormEvent } from 'react';
import micIcon from './img/mic.svg';
import camIcon from './img/videocam.svg';

import './footer.css';

function Footer ({ onAddTextMsg }: { onAddTextMsg: (msg: string) => void }): React.ReactElement {
  const [text, setText] = useState('');

  function handleChangeInput (event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setText(event.target.value);
    console.log(text);
  }

  function handleSubmit (event: FormEvent): void {
    event.preventDefault();
    console.log(event);
    onAddTextMsg(text);
    setText('');
  }

  return (
    <footer className="footer">
      <form className='form-message' onSubmit={handleSubmit}>
        <input className='message-input' type="text" value={text} placeholder='Введите сообщение' onChange={handleChangeInput} />
        <button className='btn-icon'><img src={micIcon} /></button>
        <button className='btn-icon'><img src={camIcon} /></button>
      </form>
    </footer>
  )
}

export default Footer;
