import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import ReviewsList from './ReviewsList';
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
      <Link to="/reviewsList">
        <section className="grid-view">
          {books.map(book => {
            return <BookCard book={book} key={book.id} />;
          })}
        </section>
      </Link>
      <Route path="/reviewsList" component={ReviewsList} />
    </div>
  );
}
