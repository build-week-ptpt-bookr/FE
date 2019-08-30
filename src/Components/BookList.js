import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import BookCard from './BookCard';

export default function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get('https://lambda-bookr.herokuapp.com/api/books/')
      .then(response => {
        setBooks(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {/* reviewsList by id not working */}
      <Link to="/bookList/reviewsList/:id">
        <section className="grid-view">
          {books.map(book => {
            return <BookCard book={book} key={book.id} />;
          })}
        </section>
      </Link>
    </div>
  );
}
