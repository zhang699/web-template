import React, { PropTypes as T } from 'react';
import radium from 'radium';
import { StyleRoot } from 'radium';
import NavBar from '../../containers/NavBar/';
import { fullWhite, blueGrey50 } from '../../styles/colors';
const styles = {
  leftContainer: {
    backgroundColor: fullWhite,
    flex: 1,
    position: 'relative'
  },
  mainContainer: {
    backgroundColor: blueGrey50,
    flex: 4,
    position: 'absolute',
    top: 0,
    left: '240px',
    overflow: 'hidden',
    '@media all and (max-width: 750px)': {
      left: '0vw',
      top: '80px',
      width: '100vw',
    }
  },
  container: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
  }
};


const NavBarBg = (props) => {
  return (
    <div style={styles.container}>
      <StyleRoot>
        <NavBar />
        <div style={styles.mainContainer}>
          {props.children}
        </div>
      </StyleRoot>
    </div>
  );
};


NavBarBg.propTypes = {
  children: T.object,
  headerBar: T.object,
};

export default radium(NavBarBg);
