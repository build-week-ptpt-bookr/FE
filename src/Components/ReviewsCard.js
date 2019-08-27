import React from 'react';
import { Card } from 'semantic-ui-react';

import './ReviewsCard.css';

export default function ReviewsCard(props) {
  return (
    <Card className="body-width">
      <Card.Content header={props.review.title} />
      <Card.Meta>Username: {props.review.username}</Card.Meta>
      <Card.Meta>Rating: {props.review.rating}</Card.Meta>
      <Card.Description>Comments: {props.review.comment}</Card.Description>
    </Card>
  );
}
