import React from 'react';
import radium from 'radium';
import { translate } from 'react-i18next';
import * as colorsSet from '../../../styles/colors';
import {
  btn, largeBtn, flatBtn, disabled, btnDefault, btnPrimary, btnInfo,
  btnSuccess, btnWarning, btnDanger, btnGhost, ghostMixin
} from '../../../styles/button';

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
const bgAndHoverColor = (color1,color2) => {
  return (
    {backgroundColor: color1, ':hover': {backgroundColor: color2}}
  )
}

const ButtonPage = (props) => (
  <div style={styles.container}>
    <Header title={props.t("button")} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <div className="row">
      <div className="col-md-4">
        <button key='btn1' className="btn" style={{ ...btn, ...btnDefault}}>Default</button>
        <button key='btn2' className="btn" style={{ ...btn, ...btnPrimary}}>Primary</button>
        <button key='btn3' className="btn" style={{ ...btn, ...btnInfo}}>Info</button>
        <button key='btn4' className="btn" style={{ ...btn, ...btnSuccess}}>Success</button>
        <button key='btn5' className="btn" style={{ ...btn, ...btnWarning}}>Warning</button>
        <button key='btn6' className="btn" style={{ ...btn, ...btnDanger}}>Danger</button>
      </div>
      <div className="col-md-4">
        <button key='stylebtn1' className="btn" style={{ ...btn, ...btnDefault, ...btnGhost}}>Ghost</button>
      </div>
      <div className="col-md-4">
        <button key='labelbtn1' className="btn" style={{ ...btn, ...ghostMixin(btnSuccess)}}><i className="fa fa-check fa-fw"></i>Success</button>
        <button key='labelbtn2' className="btn" style={{ ...btn, ...ghostMixin(btnDanger)}}><i className="fa fa-close fa-fw"></i>Danger</button>
      </div>

    </div>

  </div>
);

export default translate()(radium(ButtonPage));
