import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { colors } from '../../../styles/colors';
const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box',
    padding: '15px',
    // borderRadius: '1px',
    backgroundColor: colors.white,
    borderTop: `${colors.blue} 3px solid`,
    boxShadow: `${colors.grey} 2px 3px 5px`
  }
};


const Card = (props) =>
  (
  <div style={{...styles.wrapper, ...props.style}}>
    {props.children}
  </div>
  );


Card.propTypes = {
  title: T.string,
  content: T.string,
};

export default radium(Card);
