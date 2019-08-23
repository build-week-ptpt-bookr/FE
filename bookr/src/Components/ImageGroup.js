import React from 'react';
import { Divider, Image } from 'semantic-ui-react';

import logo from '../bookLogo.png';

const ImageGroup = () => (
  <div>
    <Image.Group size="tiny">
      <Image src={logo} />
      <Image src={logo} />
      <Image src={logo} />
      <Image src={logo} />
    </Image.Group>
    <Divider />
    <Image.Group size="small">
      <Image src={logo} />
      <Image src={logo} />
      <Image src={logo} />
      <Image src={logo} />
    </Image.Group>
  </div>
);

export default ImageGroup;
