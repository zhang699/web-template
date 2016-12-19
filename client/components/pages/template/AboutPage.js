import React from 'react';
import radium from 'radium';
import * as colorsSet from '../../../styles/colors';
import {
  btn, largeBtn, flatBtn, disabled, btnDefault, btnPrimary, btnInfo,
  btnSuccess, btnWarning, btnDanger, btnGhost, ghostMixin
} from '../../../styles/button';
import * as fonts from '../../../styles/fonts';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import { logoBlue, background } from '../../../assets/images/';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    boxSizing: 'border-box',
    backgroundColor: colorsSet.faintBlack,
  },
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: `url(${background})`,
    backgroundSize: '100% 100%',
    filter: 'blur(2px) brightness(1) contrast(1.1) grayscale(0.43) hue-rotate(119deg) invert(0.1) opacity(100%) saturate(1.9) sepia(0.5)',
    opacity: '0.3',
    zIndex: -1
  },
  block: {
    display: 'flex',
    flex: 1,
    margin: '10px',
    border: '2px #ddd',
    padding: '20px',
  }
};

const AboutPage = (props) => (
  <div style={styles.container}>
    <div style={styles.background} />
    <Header title={"WEB TEMPLATE"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />

      <Card style={{
          textAlign: 'center',
          padding: '50px 10vw',
          boxSizing: 'border-box',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '15px 0',
          width: '80%',
        }}>
        <img style ={{ width: '200px', filter: 'grayscale(0.5) hue-rotate(190deg)'}} src={logoBlue} alt=""/>
        <p style={fonts.p}>
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p style={fonts.p}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        </p>
        <a href="/components">
          {/* { ...btnPrimary, width: '60vw' } */}
          <button key='about-btn' className="btn" style={{ ...btn, width: '60vw'}}>GET START</button>
        </a>
      </Card>


    <Footer />
  </div>
);

export default radium(AboutPage);
