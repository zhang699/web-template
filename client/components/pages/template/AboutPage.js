import React from 'react';
import radium from 'radium';
import * as colorsSet from '../../../styles/colors';
import * as buttons from '../../../styles/button';
import * as fonts from '../../../styles/fonts';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import { logoBlue } from '../../../assets/images/';
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    boxSizing: 'border-box',
    backgroundColor: colorsSet.blueGrey50,
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
        <img style ={{ width: '200px'}} src={logoBlue} alt=""/>
        <p style={fonts.p}>
          Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p style={fonts.p}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean lacinia bibendum nulla sed consectetur.
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        </p>
        <a href="/css/">
          <button style={{ ...buttons.largeBtn, width: '60vw' }}>Get Start</button>
        </a>
      </Card>


    <Footer />
  </div>
);

export default radium(AboutPage);
