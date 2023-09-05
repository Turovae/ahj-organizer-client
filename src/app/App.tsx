import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import * as messageService from '../base/messageService';

function App (): React.ReactElement {
  const [messages, setMessages] = useState(messageService.getMessages());

  function handlerAddTextMsg (msg: string): void {
    setMessages(messageService.addMessage({ content: msg }));
  }

  return (
    <div id="app">
      <Header />
      <Main messages={messages} />
      <Footer onAddTextMsg={handlerAddTextMsg} />
    </div>
  );
}

export default App;
