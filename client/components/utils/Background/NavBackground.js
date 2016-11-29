import React, { PropTypes as T } from 'react';
import radium from 'radium';
import Background from './Background';
import NavBar from '../../../containers/NavBar/';
import HeaderBar from '../../../containers/Header/';
import HeaderBarMenu from '../../../containers/HeaderBarMenu/'

const styles = {
  bgContainerStyle: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: '0px',
    width: '1200px',
  },
  bgTopStyle: {
    backgroundColor: '#FFF',
  },
  bgBottomStyle: {
    backgroundColor: '#6DB9C7',
  },
  leftContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  mainContainer: {
    backgroundColor: '#dbe1e2',
    flex: 5,
  }
};


const NavBarBg = (props) => {
  const header = <HeaderBar />;
  return (
    <Background
      containerStyle={styles.bgContainerStyle}
      topStyle={styles.bgTopStyle}
      bottomStyle={styles.bgBottomStyle}
      headerBar={header}>
      <div style={styles.leftContainer}>
        <NavBar />
      </div>
      <div style={styles.mainContainer}>
        <HeaderBarMenu />
        {props.children}
      </div>
    </Background>
  );
};


NavBarBg.propTypes = {
  children: T.object,
  headerBar: T.object,
};

export default radium(NavBarBg);
