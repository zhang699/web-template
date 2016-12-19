import React from 'react';
import radium from 'radium';
import * as colorsSet from '../../../styles/colors';
import Card from '../../utils/Cards/';
import Header from '../../utils/Header/';
import Footer from '../../utils/Footer/';
import { input, errorInput, successInput, disabledInput, validate } from '../../../styles/form';

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
  },
  label: {
    fontSize: '1.5rem',
    lineHeight: '1.5rem',
    margin: 'auto',
    textAlign: 'center',
    paddingTop: '18px',
  }
};

const FormPage = (props) => (
  <div style={styles.container}>
    <Header title={"Form"} content={"Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."} />
    <div className="row">
      <span className="col-md-12" style={{fontSize: '4rem',margin: '5px'}}>text field</span>
      <div className="col-md-12">
        <label className="col-md-1" style={styles.label}>Account</label>
        <input className="col-md-10" key={'element1'} style={input} type={'text'} placeholder={'Account'}/>
      </div>
      <div className="col-md-12">
        <label className="col-md-1" style={styles.label}>Password</label>
        <input className="col-md-10" key={'element2'} style={input} type={'password'} placeholder={'Password'}/>
      </div>
      <div className="col-md-12">
        <label className="col-md-1" style={{ ...styles.label, color: colorsSet.green400}}>Success</label>
        <input className="col-md-10" key={'element3'} style={{ ...input, ...successInput }} type={'text'} placeholder={'Success'}/>
      </div>
      <div className="col-md-12">
        <label className="col-md-1" style={styles.label}>Disabled</label>
        <input className="col-md-10" key={'element4'} style={{ ...input, ...disabledInput }} disabled type={'text'} placeholder={'Disabled'}/>
      </div>
      <div className="col-md-12">
        <label className="col-md-1" style={{...styles.label, color: colorsSet.red500}}>Validate</label>
        <input className="col-md-10" key={'element5'} style={{ ...input, ...errorInput }} type={'text'} placeholder={'Validate'}/>
        <span className="col-md-10 col-md-offset-1" style={validate}>Format Error!</span>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <span className="col-md-12" style={{fontSize: '4rem',margin: '10px 5px'}}>checkbox</span>
      </div>
      <div className="col-md-6">
        <span className="col-md-12" style={{fontSize: '4rem',margin: '10px 5px'}}>radio button</span>
      </div>
    </div>
  </div>
);

export default radium(FormPage);
