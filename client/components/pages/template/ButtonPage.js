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

const ButtonPage = (props) => (
  <div style={styles.container}>
    <Header title={"Button"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />


  </div>
);

export default radium(ButtonPage);