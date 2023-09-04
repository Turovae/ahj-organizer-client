import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import messages from '../base/messages.json';
console.log(messages);

function App (): React.ReactElement {
  return (
    <div id="app">
      <Header />
      <main className="main">I am main</main>
      <Footer />
    </div>
  );
}

export default App;
