import React from 'react';
import radium from 'radium';
import { colors, darken, lighten } from '../../../styles/colors';
import * as button from '../../../styles/button';
import * as input from '../../../styles/input';
import * as textarea from '../../../styles/textarea';
import * as badge from '../../../styles/badge';
import * as fonts from '../../../styles/fonts';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import RadioBtn from '../../../components/utils/radioButton';

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
    border: '2px #ddd',
    padding: '10px',
  },
  row: {
    display: 'flex',
  }

};

const TypographyPage = (props) => (
  <div style={styles.container}>
    <Header title={"Typography"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <div style={{ ...styles.block, flexDirection: 'row' }}>
      <Card style={{flex: 1}}>
        <h1 style={fonts.h1}>Heading h1</h1>
        <h2 style={fonts.h2}>Heading h2</h2>
        <h3 style={fonts.h3}>Heading h3</h3>
        <h4 style={fonts.h4}>Heading h4</h4>
        <h5 style={fonts.h5}>Heading h5</h5>
        <h6 style={fonts.h6}>Heading h6</h6>
      </Card>
      <Card style={{flex: 1}}>
        TODO Bold thin weight
      </Card>
    </div>
    <div style={{ ...styles.block }}>
      <Card>
        <h3> Paragraph & Blockquote</h3>
        <p style={fonts.p}>
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna mollis euismod. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
        <blockquote style={fonts.blockquote}>
          This is an example quotation that uses the blockquote tag.
        </blockquote>
        <p style={fonts.p}>
          Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
        </p>
      </Card>
    </div>

  </div>
);


export default radium(TypographyPage);
