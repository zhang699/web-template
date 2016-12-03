import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { colors, lightBlue700 } from '../../../styles/colors';
import * as fonts from '../../../styles/fonts';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    padding: '15px',
    backgroundColor: lightBlue700,
  }
};


const Header = (props) =>(
  <div style={{...styles.wrapper, ...props.style}}>
    <h2 style={{ ...fonts.h2, color: colors.white }}>{props.title}</h2>
    <h6 style={{ ...fonts.h6, color: colors.white }}>{props.content}</h6>
  </div>
);


Header.propTypes = {
  title: T.string,
  content: T.string,
};

export default radium(Header);
