import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { colors, lightBlue400, brown700, lighten } from '../../../styles/colors';
import * as fonts from '../../../styles/fonts';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    height: '75px',
    // padding: '15px',
    // backgroundColor: lightBlue400,
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
  }
};


const Header = (props) =>(
  <div style={{...styles.wrapper, ...props.style}}>
    <div style={{ ...fonts.p, ...styles.contentWrapper, color: brown700 }}>
      <span style={{...styles.contentItem, fontSize: '24px'}}>{props.title}</span>
      <span style={{...styles.contentItem, fontSize: '14px'}}>{props.content}</span>
      {props.children}
    </div>
    <div style={styles.divideLine} />
  </div>
);


Header.propTypes = {
  title: T.string,
  content: T.string,
};

export default radium(Header);
