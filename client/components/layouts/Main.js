import React, { PropTypes as T } from 'react';
import { StyleRoot } from 'radium';

const Main = (props) => {
  return (
  <div>
    <StyleRoot>
      {props.children}
    </StyleRoot>
  </div>
)
};


Main.propTypes = {
  children: T.node,
  topBg: T.object,
  bottomBg: T.object,
  containerStyle: T.object,
};

export default Main;
