import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import ReviewsList from './ReviewsList';

import './BookList.css';

export default function BookCard(props) {
  return (
    <Card className="body-width">
      <Card.Content header={props.book.title} />
      <Card.Content description={props.book.description} />
      <Card.Content extra>
        <Icon name="child" />
      </Card.Content>
    </Card>
  );
}
