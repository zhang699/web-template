import React, { PropTypes as T } from 'react';
import radium from 'radium';
import NavBar from '../../containers/NavBar/';

const styles = {
  leftContainer: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative'
  },
  mainContainer: {
    backgroundColor: '#fcfcfc',
    flex: 4,
    position: 'relative'

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
      <div style={styles.leftContainer}>
        <NavBar />
      </div>
      <div style={styles.mainContainer}>
        {props.children}
      </div>
    </div>
  );
};


NavBarBg.propTypes = {
  children: T.object,
  headerBar: T.object,
};

export default radium(NavBarBg);
