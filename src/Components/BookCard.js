import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link, Route } from 'react-router-dom';

import Review from './Review';
import './BookList.css';

export default function BookCard(props) {
  return (
    <Card className="body-width">
      <Card.Content header={props.book.title} />
      <Card.Content description={props.book.description} />
      <Link to="/review/">Add Review</Link>
      <Route path="/review/" component={Review} />
    </Card>
  );
}
