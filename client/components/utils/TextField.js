import React from 'react';

const Field = (props) => {
  return (
    <input onChange={props.onChange} onBlur={props.onBlur} placeholder={props.placeholder} style={Object.assign({}, style.input, props.style)} />
  )
}

const style = {
  input: {
    textAlign: 'center',
    color: '#dbe1e2',
    border: '1px solid #1f4b54',
  }
}

export default Field;
