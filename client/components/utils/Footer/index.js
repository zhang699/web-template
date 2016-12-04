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


const Footer = (props) =>(
  <div style={{...styles.wrapper, ...props.style}}>
    {/* <h2 style={{ ...fonts.h2, color: colors.white }}>{props.title}</h2> */}
    {/* <h6 style={{ ...fonts.h6, color: colors.white }}>{props.content}</h6> */}
    <p style={{ ...fonts.p, color: colors.white }}>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.</p>
    <p style={{ ...fonts.p, color: colors.white }}>Copyright © 2016 by William Wang</p>
  </div>
);


Footer.propTypes = {
  title: T.string,
  content: T.string,
};

export default radium(Footer);
