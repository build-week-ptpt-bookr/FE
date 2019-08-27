import React from 'react';

import './Home.css';
import books from './books.jpg';

export default function Home() {
  return (
    <div className="home">
      <img src={books} alt="books" />
    </div>
  );
}
