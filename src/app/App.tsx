import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

import messages from '../base/messages.json';
console.log(messages);

// interface MessageProps {
//   id: number
//   content: string | undefined
//   timestamp: number
// }

function App (): React.ReactElement {
  return (
    <div id="app">
      <Header />
      <Main messages={messages} />
      <Footer />
    </div>
  );
}

export default App;
