import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import * as messageService from '../base/messageService';

function App (): React.ReactElement {
  const [messages, setMessages] = useState(messageService.getMessages());

  function handlerAddTextMsg (msg: string): void {
    console.log(typeof msg);
    console.log(typeof msg === 'string');
    setMessages(messageService.addMessage({ content: msg }));
  }

  function handlerAddFile (file: File): void {
    console.log(file);
    console.log(typeof file);
    console.log(file instanceof File);
    setMessages(messageService.addMessage({ content: file }))
  }

  return (
    <div id="app">
      <Header />
      <Main messages={messages} />
      <Footer onAddTextMsg={handlerAddTextMsg} onAddFile={handlerAddFile} />
    </div>
  );
}

export default App;
