import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import ReviewsList from './ReviewsList';

import './BookList.css';

export default function BookCard(props) {
  return (
    <BrowserRouter>
      <Link to="/books/reviews/:id">
        <Card className="body-width">
          <Card.Content header={props.name} />
          <Card.Content description="props.description" />
          <Card.Content extra>
            <Icon name="child" />
            Characters: props.character.length
          </Card.Content>
        </Card>
      </Link>
      <Route path="/reviewsList" component={ReviewsList} />
    </BrowserRouter>
  );
}
