import React from 'react';
import radium from 'radium';
import * as colorsSet from '../../../styles/colors';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    boxSizing: 'border-box',
  },
  block: {
    display: 'flex',
    flex: 1,
    margin: '10px',
    border: '2px #ddd',
    padding: '20px',
  }
};

const MediaPage = (props) => (
  <div style={styles.container}>
    <Header title={"Media"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />


  </div>
);

export default radium(MediaPage);
