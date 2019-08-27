import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BookCard from './BookCard';

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get('https://lambda-bookr.herokuapp.com/api/books/')
      .then(response => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <section className="grid-view">
        {books.map(book => {
          return <BookCard book={book} key={book.id} />;
        })}
      </section>
    </div>
  );
}
