import React from 'react';
import { Card } from 'semantic-ui-react';

import './ReviewsCard.css';

export default function ReviewsCard(props) {
  return (
    <Card className="body-width">
      <Card.Content header={props.review.title} />
      <Card.Content>Username: {props.review.username}</Card.Content>
      <Card.Content>Rating: {props.review.rating}</Card.Content>
      <Card.Content>Comments: {props.review.comment}</Card.Content>
    </Card>
  );
}
