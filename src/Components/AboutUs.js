import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

import './AboutUs.css';
import Eric from './EricSantos.png';
import Justin from './JustinSue.png';
import Aaron from './AaronHaughton.png';
import John from './JohnKouris.png';
import Mark from './MarkStahl.png';
import Toni from './ToniDarden.png';
import Joshua from './JoshuaKaunert.png';

const AboutUs = () => (
  <Card.Group>
    <Card>
      <Image src={Eric} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Eric Santos</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Full Stack Developer</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Justin} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Justin Sue</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Full Stack Developer</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />1 Friend
        </a>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Aaron} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Aaron Haughton</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Full Stack Developer</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />1 Friend
        </a>
      </Card.Content>
    </Card>
    <Card>
      <Image src={John} wrapped ui={false} />
      <Card.Content>
        <Card.Header>John Kouris</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Full Stack Developer</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />1 Friend
        </a>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Mark} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Mark Stahl</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Full Stack Developer</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />1 Friend
        </a>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Toni} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Toni Darden</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Full Stack Developer</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />1 Friend
        </a>
      </Card.Content>
    </Card>
    <Card>
      <Image src={Joshua} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Joshua Kaunert</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Full Stack Developer</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />1 Friend
        </a>
      </Card.Content>
    </Card>
  </Card.Group>
);

export default AboutUs;
