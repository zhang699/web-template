import React, { PropTypes as T } from 'react';
import radium from 'radium';
import Background from './Background';
import NavBar from '../../../containers/NavBar/';
import HeaderBar from '../../../containers/Header/';
import HeaderBarMenu from '../../../containers/HeaderBarMenu/';
import LanguageSwitcher from '../../../containers/LanguageSwitcher';
const styles = {
  bgContainerStyle: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    padding: '0px',
  },
  bgTopStyle: {
    backgroundColor: '#FFF',
  },
  bgBottomStyle: {
    backgroundColor: '#6DB9C7',
  },
  leftContainer: {
    backgroundColor: '#fff',
    flex: 2,
  },
  mainContainer: {
    boxSizing: 'border-box',
    backgroundColor: '#dbe1e2',
    padding: '2.5%',
    flex: 13,
  }
};


const MainBg = (props) => {
  const header = (<HeaderBar logoStyle={{ width: '46%' }}>
    <HeaderBarMenu key="headerbarmenu" />
    <LanguageSwitcher
      key="headelanguageswitcher"
      dropdownBtnStyle={{ color: 'rgba(31, 75, 84, 1)' }}
      arrowStyle={{ borderTop: '6px solid rgba(31, 75, 84, 1)' }} />
  </HeaderBar>);
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
        {props.children}
      </div>
    </Background>
  );
};


MainBg.propTypes = {
  children: T.object,
  headerBar: T.object,
};

export default radium(MainBg);
