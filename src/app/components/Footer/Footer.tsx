import React, { type ChangeEvent, useState, type FormEvent, useRef } from 'react';
import micIcon from './img/mic.svg';
import camIcon from './img/videocam.svg';
import uploadIcon from './img/upload_file-icon.svg';

import './footer.css';

function Footer ({ onAddTextMsg, onAddFile }: {
  onAddTextMsg: (msg: string) => void
  onAddFile: (file: File) => void
}): React.ReactElement {
  const [text, setText] = useState<string>('');

  const inputFileRef = useRef<HTMLInputElement | null>(null);

  function handleChangeInput (event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    setText(event.target.value);
    // console.log(text);
  }

  function handleSubmit (event: FormEvent): void {
    event.preventDefault();
    // console.log(event);
    onAddTextMsg(text);
    setText('');
  }

  function handleUploadClick (event: FormEvent): void {
    // console.log('click!');
    inputFileRef.current?.click();
  }

  function handleFileChange (event: ChangeEvent<HTMLInputElement>): void {
    if (event.target.files === null) {
      return;
    }

    onAddFile(event.target.files[0]);

    // const reader = new FileReader();

    // reader.addEventListener('load', (evt) => {
    //   console.log(evt);
    // })

    // reader.readAsText(event.target.files[0]);
  }

  return (
    <footer className="footer">
      <form className='form-message' onSubmit={handleSubmit}>
        <input className='message-input' type="text" value={text} placeholder='Введите сообщение' onChange={handleChangeInput} />
        <div className='file-container btn-icon' onClick={handleUploadClick}>
          <span className='overlap'><img src={uploadIcon} /></span>
          <input type='file' ref={inputFileRef} className='overlapped' onChange={handleFileChange} />
        </div>
        <button className='btn-icon' type='button'><img src={micIcon} /></button>
        <button className='btn-icon' type='button'><img src={camIcon} /></button>
      </form>
    </footer>
  )
}

export default Footer;
