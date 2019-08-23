import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import ImageGroup from './Components/ImageGroup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <ImageGroup />
    </div>
  );
}

export default App;
