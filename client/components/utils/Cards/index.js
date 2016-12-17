import React from 'react';
import radium from 'radium';
import { fullWhite, brown500, grey500 } from '../../../styles/colors';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    padding: '15px',
    backgroundColor: fullWhite,
    borderTop: `${brown500} 3px solid`,
    boxShadow: `${grey500} 2px 3px 5px`,
    margin: '10px',
  }
};


const Card = (props) => (
  <div style={{...styles.wrapper, ...props.style}}>
    {props.children}
  </div>
);

export default radium(Card);
