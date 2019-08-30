import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import StickyNavbar from './Components/StickyNavbar';
// import NewMenu from './Components/NewMenu';

function App() {
  return (
    <BrowserRouter className="App">
      <StickyNavbar />
      {/* <NewMenu /> */}
    </BrowserRouter>
  );
}

export default App;
