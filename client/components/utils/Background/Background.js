import React, {
  PropTypes as T,
} from 'react';
import { StyleRoot } from 'radium';

const styles = {
  container: {
    display: 'flex',
    boxSizing: 'border-box',
    margin: '0px 50px 65px 50px',
    backgroundColor: 'rgb(208, 216, 217)',
    padding: '30px',
    width: '1177px',
    minHeight: '100%',
  },
  headerBarWrapper: {
    display: 'flex',
    boxSizing: 'border-box',
    padding: '30px',
    margin: '0px 50px 65px 50px',
    marginTop: '0px',
    marginBottom: '0px',
    // backgroundColor: '#eee',
  },
  bgWrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100vh',
    width: '100vw',
    minWidth: '1280px',
    backgroundColor: '#6DB9C7',
    zIndex: -101,
  },
  bottomBlock: {
    position: 'absolute',
    bottom: '-45vh',
    left: 0,
    right: 0,
    height: '100vh',
    width: '150vw',
    minWidth: '1280px',
    backgroundColor: '#FFF',
    transform: 'skew(0deg, -13deg)',
    zIndex: -100,
  }
};

const Background = (props) => {
  return (
  <div>
    <div style={{ ...styles.bgWrapper, ...props.topStyle }}>
      <div style={{ ...styles.bottomBlock, ...props.bottomStyle }} />
    </div>
    {props.headerBar}
    <StyleRoot style={{ ...styles.container, ...props.containerStyle }}>
      {props.children}
    </StyleRoot>
  </div>
)
};


Background.propTypes = {
  children: T.node,
  topBg: T.object,
  bottomBg: T.object,
  containerStyle: T.object,
};

export default Background;
