import React from 'react';
import radium from 'radium';
import { colors, darken, lighten } from '../../styles/colors';
import * as button from '../../styles/button';
import * as input from '../../styles/input';
import * as textarea from '../../styles/textarea';
import RadioBtn from '../../components/utils/radioButton';

const styles = {
  container: {
    display: 'flex',
  },
  block: {
    margin: '10px'
  }
};

const ElementsPage = (props) => (
  <div style={styles.container}>
    <h1>ElementsPage</h1>
    <div style={styles.block}>
      <div><button key='btn1' style={button.btn}>button</button></div>
      <div><button key='btn2' style={button.largeBtn}>button</button></div>
      <div><button key='btn3' style={button.flatBtn}>button</button></div>
      <div><button key='btn4' style={{...button.largeBtn,...button.disabled}}>button</button></div>
    </div>
    <div style={styles.block}>
      <div><input key='input1' style={input.input} type={'text'} placeholder={'textfield'}></input></div>
      <div style={{display: 'flex'}}>
        <i className={"fa fa-lock"} aria-hidden="true" style={{ fontSize: '2.5em',marginRight: '5px' }}></i>
        <input key='input2' style={input.input} type={'password'} placeholder={'textfield'} />
      </div>
      <div><input key='input3' disabled style={input.inputDisabled} type={'text'} placeholder={'textfield'}></input></div>
    </div>
    <div style={styles.block}>
      <textarea style={textarea.textarea} type={'text'} placeholder={'textarea'}></textarea>
    </div>
    <div style={styles.block}>
      <RadioBtn option={['hello','world','john']} name={'testGp'}/>
    </div>
  </div>
);


export default radium(ElementsPage);
