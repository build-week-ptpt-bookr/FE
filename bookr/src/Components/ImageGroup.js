import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

import './ImageGroup.css';

import logo from '../bookLogo.png';

const ImageGroup = () => (
  <div className="imageGroup">
    <Image.Group size="medium">
      <Image src={logo} />
    </Image.Group>
    <div>
      <h2>Title</h2>
      <p>paragraph</p>
      <button>button</button>
    </div>
    <Divider hidden />
    <Image.Group size="medium">
      <Image src={logo} />
    </Image.Group>
    <h2>Title</h2>
    <p>paragraph</p>
    <button>button</button>
    <Divider hidden />
  </div>
);

export default ImageGroup;
