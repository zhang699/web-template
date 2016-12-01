import React, { PropTypes as T } from 'react';
import radium from 'radium';
import NavBar from '../../containers/NavBar/';

const styles = {
  leftContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainContainer: {
    backgroundColor: '#dbe1e2',
    flex: 4,
  },
  container: {
    display: 'flex',
    width: '100%',
  }
};


const NavBarBg = (props) => {
  // const header = <HeaderBar />;
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
