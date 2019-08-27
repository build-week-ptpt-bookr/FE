import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import StickyNavbar from './Components/StickyNavbar';
import ReviewList from './Components/ReviewsList';

function App() {
  return (
    <BrowserRouter className="App">
      <StickyNavbar />
      <ReviewList />
    </BrowserRouter>
  );
}

export default App;
