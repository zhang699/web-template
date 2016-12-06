import React from 'react';
import radium from 'radium';
import * as colorsSet from '../../../styles/colors';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import { teal400, fullWhite } from '../../../styles/colors';
import * as shadows from '../../../styles/shadow';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    minHeight: '100vh'
  },
  block: {
    display: 'flex',
    flex: 1,
    margin: '10px',
    border: '2px #ddd',
    padding: '20px',
  },
  demoBox: {
    width: '100px',
    height: '100px',
    margin: '15px',
    color: fullWhite,
    backgroundColor: teal400,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const ShadowPage = (props) => (
  <div style={styles.container}>
    <Header title={"Shadow"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <div style={styles.block}>
      <Card style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div style={{ ...styles.demoBox, ...shadows.shadowA }}>
          shoadwA
        </div>
        <div style={{ ...styles.demoBox, ...shadows.shadowB }}>
          shoadwB
        </div>
        <div style={{ ...styles.demoBox, ...shadows.shadowC }}>
          shoadwC
        </div>
        <div style={{ ...styles.demoBox, ...shadows.shadowD }}>
          shoadwD
        </div>
        <div style={{ ...styles.demoBox, ...shadows.shadowE }}>
          shoadwE
        </div>
        <div style={{ ...styles.demoBox, ...shadows.shadowF }}>
          shoadwF
        </div>
        <div style={{ ...styles.demoBox, ...shadows.shadowG }}>
          shoadwG
        </div>
        <div style={{ ...styles.demoBox, ...shadows.shadowH }}>
          shoadwH
        </div>
      </Card>
    </div>

  </div>
);

export default radium(ShadowPage);
