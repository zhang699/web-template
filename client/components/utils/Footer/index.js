import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { lightBlue400, brown700 } from '../../../styles/colors';
import * as fonts from '../../../styles/fonts';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
  },
  divideLine: {
    height: '1px',
    backgroundColor: brown700,
    margin: '5px 0px',
  },
  contentWrapper: {
    display: 'flex',
    padding: '15px',
    alignItems: 'baseline',
  },
  contentItem: {
    margin: '5px',
    color: brown700,
    minWidth: '300px',
  }
};


const Footer = (props) =>(
  <div style={{...styles.wrapper, ...props.style}}>
    <div style={styles.divideLine}/>
    <div style={{ ...styles.contentWrapper}}>
      <span style={{ ...fonts.h6, ...styles.contentItem  }}>{props.title || 'Ipsum Pharetra Malesuada'}</span>
      <span style={{ ...fonts.p, ...styles.contentItem }}>{ props.content || 'Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Aenean lacinia bibendum nulla sed consectetur. Sed posuere consectetur est at lobortis.'}</span>
      <span style={{ ...fonts.p, ...styles.contentItem, textAlign: 'right' }}> { props.copyright || 'Copyright © 2016 by William Wang'}</span>
    </div>
  </div>
);


Footer.propTypes = {
  title: T.string,
  content: T.string,
  copyright: T.string,
};

export default radium(Footer);
