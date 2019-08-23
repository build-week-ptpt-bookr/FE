import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

import './ImageGroup.css';

import logo from '../bookLogo.png';

const ImageGroup = () => (
  <div className="imageGroup">
    <Image.Group size="medium">
      <Image src={logo} />
      <Image src={logo} />
    </Image.Group>
    <Divider hidden />
    <Image.Group size="medium">
      <Image src={logo} />
      <Image src={logo} />
    </Image.Group>
    <Divider hidden />
    <Image.Group size="medium">
      <Image src={logo} />
      <Image src={logo} />
    </Image.Group>
  </div>
);

export default ImageGroup;
