import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import StickyNavbar from './Components/StickyNavbar';
import EditBook from './Components/EditBook';
// import NewMenu from './Components/NewMenu';

function App() {
  return (
    <BrowserRouter className="App">
      <StickyNavbar />
      {/* <NewMenu /> */}
      <EditBook />
    </BrowserRouter>
  );
}

export default App;
