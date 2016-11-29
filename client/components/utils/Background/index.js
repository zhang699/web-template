import React from 'react';
import Background from './Background';

import NavBackground from './NavBackground';
import AuthBackground from './AuthBackground';
import PersonalBackground from './PersonalBackground';
import MainBackground from './MainBackground';


// Inject Header and Bgcolor TEST
import HeaderBar from '../../../containers/Header/';
const YellowBg = (props) => {
  const header = <HeaderBar />;
  return (<Background
    topStyle={{ backgroundColor: '#FFF' }}
    bottomStyle={{ backgroundColor: 'rgb(223, 190, 54)' }}
    headerBar={header}>
    {props.children}
  </Background>);
};


const BlueBg = (props) => {
  const header = <HeaderBar />;
  return (<Background
    topStyle={{ backgroundColor: '#FFF' }}
    bottomStyle={{ backgroundColor: '#6DB9C7' }}
    headerBar={header}>
    {props.children}
  </Background>);
};

export {
  NavBackground,
  AuthBackground,
  PersonalBackground,
  MainBackground,
  // test
  YellowBg,
  BlueBg,
};
