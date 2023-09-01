import React from "react";
import ChaosIcon from "../img/chaos-logo.png";
console.log(ChaosIcon);

// const icon = new Image();
// icon.src = ChaosIcon;

export default function App() {
  return (
    <div id="app">
      <header className="header">
        <div className="header-logo">
          <img src={ChaosIcon} />
        </div>
        <div className="header-title">Chaos Organizer</div>
        <div className="header-search">Search</div>
      </header>
      <main className="main">I am main</main>
      <footer className="footer">I am footer</footer>
    </div>
  );
}
