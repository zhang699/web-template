import React from 'react';
import radium from 'radium';
import { colors, darken, lighten } from '../../styles/colors';
import * as button from '../../styles/button';
import * as input from '../../styles/input';
import * as textarea from '../../styles/textarea';
import * as badge from '../../styles/badge';
import * as fonts from '../../styles/fonts';
import Card from '../utils/Cards/';
import RadioBtn from '../../components/utils/radioButton';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    boxSizing: 'border-box',
  },
  block: {
    flex: 1,
    margin: '10px',
    border: '2px #ddd',
    padding: '20px',
  },
  row: {
    display: 'flex',
  }

};

const ElementsPage = (props) => (
  <div style={styles.container}>

    <h1 style={fonts.h1}>ElementsPage</h1>
    <div style={styles.block}>
      <Card style={{flexDirection: 'row'}}>
        <div style={{flex: 1}}>
          <h1 style={fonts.h1}>This is head in h1</h1>
          <h2 style={fonts.h2}>This is head in h2</h2>
          <h3 style={fonts.h3}>This is head in h3</h3>
          <h4 style={fonts.h4}>This is head in h4</h4>
          <h5 style={fonts.h5}>This is head in h5</h5>
          <h6 style={fonts.h6}>This is head in h6</h6>
        </div>
        <div style={{flex: 1}}>
          <p style={fonts.p}>
            Nulla vitae elit libero, a pharetra augue. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </p>
        </div>
      </Card>
    </div>
    <div style={styles.block}>
      <Card style={{flexDirection: 'row'}}>
        <h5 style={fonts.h5}>Buttons</h5>
        <div>
          <button key='btn1' style={button.btn}>button</button>
          <button key='btn2' style={button.largeBtn}>button</button>
          <button key='btn3' style={button.flatBtn}>button</button>
          <button key='btn4' style={{...button.largeBtn,...button.disabled}}>button</button>
        </div>
      </Card>

    </div>
    <div style={styles.block}>
      <h4 style={fonts.h4}>Froms</h4>
      <div><input key='input1' style={input.input} type={'text'} placeholder={'textfield'}></input></div>
      <div style={{display: 'flex'}}>
        <i className={"fa fa-lock"} aria-hidden="true" style={{ fontSize: '2.5em',marginRight: '5px' }}></i>
        <input key='input2' style={input.input} type={'password'} placeholder={'textfield'} />
      </div>
      <div>
        <input key='input3' disabled style={input.inputDisabled} type={'text'} placeholder={'textfield'} />
      </div>
    </div>
    <div style={styles.block}>
      <h4 style={fonts.h4}>Textarea</h4>
      <textarea style={textarea.textarea} type={'text'} placeholder={'textarea'}></textarea>
    </div>
    <div style={styles.block}>
      <h4 style={fonts.h4}>Badge</h4>
      <div>
        <span style={badge.badge}>123</span>
      </div>
    </div>
    <div style={styles.block}>
      <h4 style={fonts.h4}>RadioBtn</h4>
      <RadioBtn option={['hello','world','john']} name={'testGp'}/>
    </div>
  </div>
);


export default radium(ElementsPage);
