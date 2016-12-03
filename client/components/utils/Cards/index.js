import React from 'react';
import radium from 'radium';
import { colors } from '../../../styles/colors';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    padding: '15px',
    backgroundColor: colors.white,
    borderTop: `${colors.blue} 3px solid`,
    boxShadow: `${colors.grey} 2px 3px 5px`,
    margin: '10px',
  }
};


const Card = (props) => (
  <div style={{...styles.wrapper, ...props.style}}>
    {props.children}
  </div>
);

export default radium(Card);
