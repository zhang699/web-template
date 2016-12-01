import React from 'react';
import radium from 'radium';

const click = (e) => {
  console.log(e.target.value);
}

const RadioButton = (props) => (
  <div style={{display: 'flex', flexDirection: 'column'}}>
    {
      props.option.map((item, idx) => {
        return(
        <label
          key={`${props.name}-${idx}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: '1rem'
          }}>
          <input
            type={'radio'}
            style={{visibility: 'hidden' }}
            name={props.name}
            value={item}
            onClick={click} />
          <div
            style={{
              border: 'solid 1px #000',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              margin: '0 5px 5px 0'
            }} />
          {item}
        </label>);
      })
    }
  </div>
);

export default radium(RadioButton);
