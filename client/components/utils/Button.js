import React from 'react';

const style = {
  btn: {
    width: '50%',
    background: '#C24E30',
    color: 'white',
    border: 'none',
    boxShadow: '#ddd 1px 1px 1px',
    cursor: 'pointer'
  },
  btnDisabled: {
    background: '#ddd',
    cursor: 'not-allowed'
  }
};

const Button = (props) => {
  if (props.disabled) {
    return <button style={{ ...style.btn, ...style.btnDisabled, ...props.style }}>{props.name}</button>
  }
  return <button onClick={props.onClick} style={{ ...style.btn, ...props.style }}>{props.name}</button>;
};


export default Button;
