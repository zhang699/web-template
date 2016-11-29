import React, { PropTypes as T } from 'react';
import radium from 'radium';

const styles = {
  itemWrapper: {
    height: '50px',
    margin: '0px 0% 20px 0%',
    padding: '1px',
    backgroundColor: '#368e9f',
    borderRadius: '2px 2px 2px 2px',
    position: 'relative',
  },
  itemTitle: {
    boxSizing: 'border-box',
    fontSize: '12px',
    lineHeight: '12px',
    backgroundColor: '#fff',
    color: '#1f4b54',
    height: '23px',
    padding: '4px 0px',
    textAlign: 'center',
    width: '100%',
    borderRadius: '2px 2px 2px 2px',
  },
  itemContentWrpper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    borderRadius: '0px 2px 2px 0px',
  },
  itemContent: {
    color: '#fff',
    height: '18px',
    lineHeight: '18px',
    fontSize: '12px',
    padding: '4px 0px',
    textAlign: 'center',
    width: '100%',
  },
  lightWord: {
    color: '#6db9c7',
  },
  lightBg: {
    backgroundColor: '#6db9c7',
  },
  arrowStyle: {
    position: 'relative',
    color: 'rgba(229, 105, 73, 0.6)',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  }
};

const rightArrow = (props) => (
  <button
    onClick={ (e) => { e.preventDefault(); props.onClickRight(); }}
    key={'arrow-' + Math.random()}
    style={{
      ...styles.arrowStyle,
      top: '-35px',
      left: '100%',
      marginLeft: '25px',
    }}><i className="fa fa-angle-right fa-2x" aria-hidden="true"></i></button>
);

const leftArrow = (props) => (
  <button
    onClick={(e) => { e.preventDefault(); props.onClickLeft(); }}
    key={'arrow-' + Math.random()}
    style={{
      ...styles.arrowStyle,
      top: '-50px',
      marginLeft: '-65px',
    }}><i className="fa fa-angle-left fa-4x" aria-hidden="true"></i></button>
);

const upArrow = (props) => (
  <button
    onClick={(e) => { e.preventDefault(); props.onClickUp(); }}
    key={'arrow-' + Math.random()}
    style={{
      ...styles.arrowStyle,
      top: '-60px',
      left: '110px',
      position: 'absolute',
    }}><i className="fa fa-angle-up fa-4x" aria-hidden="true"></i></button>
);

const downArrow = (props) => (
  <button
    onClick={(e) => { e.preventDefault(); props.onClickDown(); }}
    key={'arrow-' + Math.random()}
    style={{
      ...styles.arrowStyle,
      top: '70px',
      left: '110px',
      position: 'absolute',
    }}><i className="fa fa-angle-down fa-4x" aria-hidden="true"></i></button>
);


const RecommendBox = (props) => {
  switch (props.type) {
    case 'light':
      return (
        <div style={{ ...styles.itemWrapper, ...styles.lightBg }}>
          <div style={{ ...styles.itemTitle, ...styles.lightWord }}>{props.title}</div>
          <div style={styles.itemContentWrpper}>
            <div style={styles.itemContent}>{props.content1}</div>
            <div style={styles.itemContent}>{props.content2}</div>
          </div>
          {props.arrowRight && rightArrow(props)}
          {props.arrowLeft && leftArrow(props)}
          {props.arrowUp && upArrow(props)}
          {props.arrowDown && downArrow(props)}
        </div>
      );

    case 'dark':
      return (
        <div style={{ ...styles.itemWrapper }}>
          <div style={{ ...styles.itemTitle }}>{props.title}</div>
          <div style={styles.itemContentWrpper}>
            <div style={styles.itemContent}>{props.content1}</div>
            <div style={styles.itemContent}>{props.content2}</div>
          </div>
          {props.arrowRight && rightArrow(props)}
          {props.arrowLeft && leftArrow(props)}
          {props.arrowUp && upArrow(props)}
          {props.arrowDown && downArrow(props)}
        </div>
      );
    case 'root':
      return (
        <div style={{ ...styles.itemWrapper, backgroundColor: 'rgb(229, 105, 73)' }}>
          <div style={{ ...styles.itemTitle, color: 'rgb(229, 105, 73)' }}>{props.title}</div>
          <div style={styles.itemContentWrpper}>
            <div style={styles.itemContent}>{props.content1}</div>
            <div style={styles.itemContent}>{props.content2}</div>
          </div>
          {props.arrowRight && rightArrow(props)}
          {props.arrowLeft && leftArrow(props)}
          {props.arrowUp && upArrow(props)}
          {props.arrowDown && downArrow(props)}
        </div>
      );
    case 'disabled':
      return (
        <div style={{ ...styles.itemWrapper, backgroundColor: '#fff', position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '25px 0 25px 8em',
              borderColor: 'transparent transparent transparent #dbe1e2',
            }} />
          <div
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '25px 8em 25px 0',
              borderColor: 'transparent #dbe1e2 transparent transparent',
            }} />
          <div
            style={{
              position: 'absolute',
              right: '2px',
              bottom: '-1px',
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '0 8em 26px 8em',
              borderColor: 'transparent transparent #dbe1e2 transparent',
            }} />
          <div
            style={{
              position: 'absolute',
              right: '3px',
              top: '-2px',
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: '25px 8em 0 8em',
              borderColor: '#dbe1e2 transparent transparent transparent',
            }} />
        </div>
      );
    default:
      return true;
  }
};

RecommendBox.propTypes = {
  title: T.string,
  content1: T.string,
  content2: T.string,
  color: T.string,
  // index: T.int,
  type: T.string,
  arrowDown: T.bool,
  arrowUp: T.bool,
  arrowLeft: T.bool,
  arrowRight: T.bool,
};

export default radium(RecommendBox);
