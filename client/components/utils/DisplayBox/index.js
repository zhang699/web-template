import React, { PropTypes as T } from 'react';
import radium from 'radium';

const styles = {
  itemWrapper: {
    display: 'flex',
    boxSizing: 'border-box',
    width: '188px',
    height: '28px',
    margin: '22.5px 2.4%'
  },
  itemTitle: {
    flex: 5,
    fontSize: '12px',
    lineHeight: '18px',
    backgroundColor: '#1f4b54',
    color: '#fff',
    height: '18px',
    padding: '4px',
    textAlign: 'center',
    width: '100%',
    borderRadius: '2px 0px 0px 2px',
    border: 'solid 1px #1f4b54',
  },
  itemContent: {
    flex: 3,
    backgroundColor: '#fff',
    color: '#1f4b54',
    height: '18px',
    lineHeight: '18px',
    fontSize: '12px',
    padding: '4px',
    textAlign: 'center',
    width: '100%',
    borderRadius: '0px 2px 2px 0px',
    border: 'solid 1px #1f4b54',

  }
};


const DisplayBox = (props) =>
  (
  <div style={{...styles.itemWrapper, ...props.displayWrapper }}>
    <div style={{ ...styles.itemTitle, ...props.displayLeft, }}>{props.title}</div>
    <div style={{ ...styles.itemContent, ...props.displayRight, }}>{props.content}</div>
  </div>
  );


DisplayBox.propTypes = {
  title: T.string,
  content: T.string,
};

export default radium(DisplayBox);
