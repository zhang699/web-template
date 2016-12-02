import React, { PropTypes as T } from 'react';
import radium from 'radium';
import Background from './Background';
import HeaderBar from '../../../containers/Header/';
import LanguageSwitcher from '../../../containers/LanguageSwitcher';

const styles = {
  bgContainerStyle: {
  },
  bgTopStyle: {
    backgroundColor: '#6DB9C7'
  },
  bgBottomStyle: {
    backgroundColor: '#FFF'
  }
};


const AuthBackground = (props) => {
  const header = <HeaderBar logoStyle={{ display: 'none' }}>
    <LanguageSwitcher />
  </HeaderBar>;
  return (
    <Background
      topStyle={styles.bgTopStyle}
      bottomStyle={styles.bgBottomStyle}
      headerBar={header}
      modal={props.location.query}
      containerStyle={{ width: '80vw', height: '65vh', minHeight: '800px' }} >
      {props.children}
    </Background>
  );
};

AuthBackground.propTypes = {
  children: T.object,
  headerBar: T.object,
};

export default radium(AuthBackground);
