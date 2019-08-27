import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import StickyNavbar from './Components/StickyNavbar';

function App() {
  return (
    <BrowserRouter className="App">
      <StickyNavbar />
    </BrowserRouter>
  );
}

export default App;
