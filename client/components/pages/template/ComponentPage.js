import React from 'react';
import radium from 'radium';
import { colors, darken, lighten } from '../../../styles/colors';
import * as fonts from '../../../styles/fonts';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import DisplayBox from '../../utils/DisplayBox/';
import DatePicker from '../../utils/DatePicker/';
import RadioBtn from '../../../components/utils/radioButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
  }

};

const ComponentPage = (props) => (
  <div style={styles.container}>
    <Header title={"Component"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Header</h5>
      <p style={fonts.p}> Usaege props : title (string), content (string), style (obj)</p>
      <Header title={"TITLE"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Footer</h5>
      <p style={fonts.p}> Usaege props : title (string), content (string), copyright (string), style(obj)</p>
      <Footer />
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Card</h5>
      <p style={fonts.p}> Usaege props : style (obj)</p>
      <div style={{ width : '90%' }}>
        <Card>
          <h4 style={fonts.h4}>This is a Card container.</h4>
          <p style={fonts.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus.
            Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla. Donec sed odio dui.
          </p>
        </Card>
      </div>
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>DisplayBox</h5>
      <p style={fonts.p}> Usaege props : style (obj)</p>
      <DisplayBox></DisplayBox>
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>DatePicker</h5>
      TODO
      <p style={fonts.p}> Usaege props : style (obj)</p>
      <DatePicker />
    </Card>

    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Search Field</h5>
      TODO
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Editable Field</h5>
      TODO
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Selector</h5>
      TODO
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Warning Box</h5>
      TODO
    </Card>
    <Card style={{ margin: '10px 0', boxSizing: 'border-box'}}>
      <h5 style={fonts.h5}>Modal</h5>
      <a href="http://madscript.com/boron/">Boron</a>
    </Card>
  </div>
);


export default radium(ComponentPage);
