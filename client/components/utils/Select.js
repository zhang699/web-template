import React from 'react';
import { arrowBg } from '../../assets/images';

const Select = (props) => {
  if (props.name instanceof Array === false) {
    console.error('props.name of <Select /> need to be an Array');
    return <div />
  }
  return (
    <select onChange={props.onChange} style={Object.assign({}, style.select, props.style)}>
      {
        props.name.map((_option,i) => {
          return (
            <option key={i} value={_option}>{_option}</option>
         )
        })
      }
    </select>
  );
};

const style = {
  select: {
    color: 'rgb(54, 142, 159)',
    textAlignLast: 'center',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    background: 'transparent',
    backgroundColor: 'white',
    background: `url(${arrowBg}) 100% / 25px no-repeat #eee`
  }
}

Select.propTypes = {
};

export default Select;
