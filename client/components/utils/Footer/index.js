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
    <h6 style={{ ...fonts.h6, color: colors.white }}>{props.title || 'Ipsum Pharetra Malesuada'}</h6>
    <p style={{ ...fonts.p, color: colors.white }}>{ props.content || 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.'}</p>
    <p style={{ ...fonts.p, color: colors.white, textAlign: 'right' }}> { props.copyright || 'Copyright © 2016 by William Wang'}</p>
  </div>
);


Footer.propTypes = {
  title: T.string,
  content: T.string,
  copyright: T.string,
};

export default radium(Footer);
