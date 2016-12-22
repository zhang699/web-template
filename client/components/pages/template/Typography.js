import React from 'react';
import radium from 'radium';
import { translate } from 'react-i18next';
import { colors, darken, lighten } from '../../../styles/colors';
import * as button from '../../../styles/button';
import * as input from '../../../styles/input';
import * as textarea from '../../../styles/textarea';
import * as badge from '../../../styles/badge';
import * as fonts from '../../../styles/fonts';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import RadioBtn from '../../../components/utils/radioButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
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
    <Header title={props.t("typography")} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <div style={{ ...styles.block, flexDirection: 'row', flexWrap: 'wrap' }}>
      <Card style={{flex: 1, alignItems: 'center' }}>
        <h1 style={fonts.h1}>Heading h1</h1>
        <h2 style={fonts.h2}>Heading h2</h2>
        <h3 style={fonts.h3}>Heading h3</h3>
        <h4 style={fonts.h4}>Heading h4</h4>
        <h5 style={fonts.h5}>Heading h5</h5>
        <h6 style={fonts.h6}>Heading h6</h6>
      </Card>
      <Card style={{flex: 1, alignItems: 'center' }}>
        <span style={{ ...fonts.p, fontWeight: '100' }}>Weight 100 &nbsp;<i>Weight 100</i>&nbsp; <u>Weight 100</u> </span>
        <span style={{ ...fonts.p, fontWeight: '200' }}>Weight 200 &nbsp;<i>Weight 200</i>&nbsp; <u>Weight 200</u> </span>
        <span style={{ ...fonts.p, fontWeight: '300' }}>Weight 300 &nbsp;<i>Weight 300</i>&nbsp; <u>Weight 300</u> </span>
        <span style={{ ...fonts.p, fontWeight: '400' }}>Weight 400 &nbsp;<i>Weight 400</i>&nbsp; <u>Weight 400</u> </span>
        <span style={{ ...fonts.p, fontWeight: '500' }}>Weight 500 &nbsp;<i>Weight 500</i>&nbsp; <u>Weight 500</u> </span>
        <span style={{ ...fonts.p, fontWeight: '600' }}>Weight 600 &nbsp;<i>Weight 600</i>&nbsp; <u>Weight 600</u> </span>
        <span style={{ ...fonts.p, fontWeight: '700' }}>Weight 700 &nbsp;<i>Weight 700</i>&nbsp; <u>Weight 700</u> </span>
        <span style={{ ...fonts.p, fontWeight: '800' }}>Weight 800 &nbsp;<i>Weight 800</i>&nbsp; <u>Weight 800</u> </span>
        <span style={{ ...fonts.p, fontWeight: '900' }}>Weight 900 &nbsp;<i>Weight 900</i>&nbsp; <u>Weight 900</u> </span>
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
    <Footer></Footer>
  </div>
);


export default translate()(radium(TypographyPage));
