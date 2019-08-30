import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

import ReviewsList from './ReviewsList';
import './BookList.css';

export default function BookCard(props) {
  return (
    <Card className="body-width">
      <Card.Content header={props.book.title} />
      <Card.Content description={props.book.description} />
      <Link to="/bookCard/reviewsList/:id">Add Review</Link>
      <Route path="/bookCard/reviewList/:id" component={ReviewsList} />
    </Card>
  );
}
