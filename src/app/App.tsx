import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import * as messageService from '../base/messageService';

interface MessageProps {
  id: number
  title: string
  content: string | File
  timestamp: number
  isUser: boolean
}

// interface ResponseProps {
//   status: { ok: boolean }
//   content: MessageProps[]
// }

function App (): React.ReactElement {
  const [messages, setMessages] = useState<[] | MessageProps[]>([]);
  const [dragOver, setDragOver] = useState(false);

  const URL = process.env.PUBLIC_URL;

  useEffect(() => {
    async function fetching (): Promise<null> {
      const data = await messageService.getMessages();
      setMessages(data);

      return null;
    }

    void fetching();
  }, []);

  function handlerAddTextMsg (msg: string): void {
    // setMessages(messageService.addMessage({ content: msg }));

    async function fetching (): Promise<null> {
      const response = await fetch(`${URL}/posts/add`, {
        method: 'POST',
        body: msg
      })

      if (response.ok) {
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (data.status.ok) {
          setMessages(data.content);
        }
      }

      return null;
    }

    void fetching();
  }

  function handlerAddFile (file: File): void {
    // setMessages(messageService.addMessage({ content: file }));
    // console.log(file);
    const formData = new FormData();
    formData.append('file', file);

    async function fetching (): Promise<null> {
      const response = await fetch(`${URL}/posts/upload`, {
        method: 'POST',
        body: formData
      })

      console.log(response)
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }

      return null;
    }

    void fetching();
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
    console.log(file);
    // setMessages(messageService.addMessage({ content: file }));

    handlerAddFile(file);
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
