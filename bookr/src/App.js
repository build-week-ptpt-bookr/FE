import React from 'react';
import logo from './bookLogo.png';
import './App.css';
import ContainerExampleContainer from './Components/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="www.bookr.com">
          <h2>Bookr</h2>
        </a>
      </header>
      >
    </div>
  );
}

export default App;
