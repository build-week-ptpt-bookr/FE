import React from 'react';

import './App.css';

import Main from './Components/Main';
import ImageGroup from './Components/ImageGroup';
import StickyNavbar from './Components/StickyNavbar';

function App() {
  return (
    <div className="App">
      <StickyNavbar />
      <Main />
      <ImageGroup />
    </div>
  );
}

export default App;
