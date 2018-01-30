import React from 'react';
import { Menu } from 'semantic-ui-react';

export default props => {
  return (
    <div>
      <h1>I'm a Header</h1>
      {props.children}
    </div>
  )
};