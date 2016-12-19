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

const Display = (props) => {
  return (!!colorsSet[props.color]) ? (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colorsSet[props.color],
        padding: '0 10px',
        width: '100%',
        height: '40px',
        boxSizing: 'border-box',
      }}>
      <div>
        {props.color}
      </div>
      <div>
        {colorsSet[props.color]}
      </div>
    </div>
  ) : <div></div>;
};
const DisplayWrapper = (props) => {
  if(props.color !== 'Grayscale') {
    return (
      <div style={{
          flexDirection: 'column',
          display: 'flex',
          flex: 1,
          boxSizing: 'border-box',
          margin: '20px 5px',
          minWidth: '220px',
        }}>
        {
          ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700'].map(
            item => <Display key={`${item}-${props.color}`} color={`${props.color}${item}`} />
          )
        }
      </div>
    );
  }
  return (
    <div style={{
        flexDirection: 'column',
        display: 'flex',
        flex: 1,
        boxSizing: 'border-box',
        margin: '40px 10px',
        minWidth: '220px',
      }}>
      {
        ['transparent', 'fullWhite', 'darkWhite', 'lightWhite', 'minWhite', 'faintWhite', 'faintBlack', 'minBlack', 'lightBlack', 'darkBlack', 'fullBlack'].map(
          item => <Display key={`${item}`} color={`${item}`} />
        )
      }
    </div>
  )
};
const ColorPage = (props) => (
  <div style={styles.container}>
    <Header title={"Color Page"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <div style={{ ...styles.block, flexDirection: 'row', flexWrap: 'wrap'}}>
      {
        [
          'red',
          'pink',
          'purple',
          'deepPurple',
          'indigo',
          'blue',
          'lightBlue',
          'cyan',
          'teal',
          'green',
          'lightGreen',
          'lime',
          'yellow',
          'amber',
          'orange',
          'deepOrange',
          'brown',
          'blueGrey',
          'grey'
        ].map(
          (color, idx) => <DisplayWrapper key={color+'-'+idx} color={color}/>
        )
      }
      <DisplayWrapper color={'Grayscale'} />
    </div>
    <Footer />
  </div>
);

export default radium(ColorPage);
