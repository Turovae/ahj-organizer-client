import React from 'react';
import micIcon from './img/mic.svg';
import camIcon from './img/videocam.svg';

import './footer.css';

function Footer (): React.ReactElement {
  return (
    <footer className="footer">
      <form className='form-message'>
        <input className='message-input' type="text" placeholder='Введите сообщение' />
        <button className='btn-icon'><img src={micIcon} /></button>
        <button className='btn-icon'><img src={camIcon} /></button>
      </form>
    </footer>
  )
}

export default Footer;
