import React from 'react';
import { colors, darken, lighten } from '../../styles/colors';
import * as button from '../../styles/button';

const styles = {
  container: {
    display: 'flex',
  }
};

const ElementsPage = (props) => (
  <div style={styles.container}>
    <h1>ElementsPage</h1>
    <div>
      <div><a key='1' style={button.btn}>button</a></div>
      <div><a key='2' style={button.largeBtn}>button</a></div>
      <div><a key='3' style={button.flatBtn}>button</a></div>
      <div><a key='4' style={{...button.largeBtn,...button.disabled}}>button</a></div>
    </div>
  </div>
);


export default ElementsPage;
