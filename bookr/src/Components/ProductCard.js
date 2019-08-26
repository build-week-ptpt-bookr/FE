import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

import './ProductList.css';

export default function BookCard(props) {
  return (
    <Card className="body-width">
      <Card.Content header={props.name} />
      <Card.Content description="props.description" />
      <Card.Content extra>
        <Icon name="child" />
        Characters: props.character.length
      </Card.Content>
    </Card>
  );
}
