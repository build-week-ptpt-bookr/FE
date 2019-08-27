import React from 'react';
import { Card } from 'semantic-ui-react';

import './BookList.css';

export default function BookCard(props) {
  return (
    <Card className="body-width">
      <Card.Content header={props.book.title} />
      <Card.Content description={props.book.description} />
    </Card>
  );
}
