///////Radium bug 為在不同元件引用同一個ＣＯＭＰＯＮＥＮＴ後改變引用的樣式之後會記憶上一個改變的ＳＴＹＬＥ
///導致跑版

import React from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick} style={Object.assign(style.btn, props.style)}>{props.name}</button>
  );
};

const style = {
  btn: {
    width: '50%',
    background: '#C24E30',
    color: 'white'
  }
}

export default Button
