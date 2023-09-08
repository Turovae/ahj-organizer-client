import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import * as messageService from '../base/messageService';

function App (): React.ReactElement {
  const [messages, setMessages] = useState(messageService.getMessages());
  const [dragOver, setDragOver] = useState(false);

  function handlerAddTextMsg (msg: string): void {
    setMessages(messageService.addMessage({ content: msg }));
  }

  function handlerAddFile (file: File): void {
    setMessages(messageService.addMessage({ content: file }));
  }

  function handleDragOver (event: React.DragEvent): void {
    event.preventDefault();
    if (dragOver) {
      return
    }
    setDragOver(true);
  }

  function handleDragLeave (event: React.DragEvent): void {
    event.preventDefault();
    setDragOver(false);
  }

  function handleDrop (event: React.DragEvent): void {
    event.preventDefault();
    setDragOver(false);

    if (event.dataTransfer.files === null) {
      return;
    }

    const file = event.dataTransfer.files[0];
    setMessages(messageService.addMessage({ content: file }));
  }

  return (
    <div id="app" onDragOver={handleDragOver} onDrop={handleDrop} >
      <Header />
      <Main messages={messages} />
      <Footer onAddTextMsg={handlerAddTextMsg} onAddFile={handlerAddFile} />
      {dragOver && <div className='add-file-shower' onDragLeave={handleDragLeave}>Add File</div>}
    </div>
  );
}

export default App;
