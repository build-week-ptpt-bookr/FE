import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import StickyNavbar from './Components/StickyNavbar';
import Review from './Components/Review';
// import NewMenu from './Components/NewMenu';

function App() {
  return (
    <BrowserRouter className="App">
      <StickyNavbar />
      {/* <NewMenu /> */}
      <Review />
    </BrowserRouter>
  );
}

export default App;
