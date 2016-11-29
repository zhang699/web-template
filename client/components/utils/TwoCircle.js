import React, { PropTypes as T } from 'react';

// let hasSelect = false;
//
// const click = (e) => {
//   if (hasSelect === false) {
//     e.target.style.background = '#c24e30';
//     hasSelect = true;
//     return;
//   }
//   e.target.style.background = '';
//   hasSelect = false;
// };
const click = (e) => {
  const circleWrapper = document.getElementsByClassName('circleWrapper')
  const innerCircle = document.getElementsByClassName('innerCircle');
  const leftWord = document.getElementsByClassName('leftWord');
  const rightWord = document.getElementsByClassName('rightWord');
  for (let i = 0; i < circleWrapper.length; i++) {
    innerCircle[i].style.background = '#fff';
    leftWord[i].style.color = '#1f4b54';
    rightWord[i].style.color = '#1f4b54';
  }
  console.log(e.target.className);
};

const TwoCircle = (props) =>
  (
  <div
    className="circleWrapper"
    onClick={(e) => { props.onClick(props.content); click(e); }}
    style={{
      display: 'flex',
      flex: '1',
      marginBottom: '15px',
      cursor: 'pointer',
      zIndex: '1000'
    }}>
    <div
      style={{
        border: '1px solid #1f4b54',
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '-1'
      }}>
      <div
        className="innerCircle"
        style={{
          border: '1px solid #1f4b54',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          margin: 'auto',
          zIndex: '-1'
        }}>
      </div>
    </div>
    <span
      className="leftWord"
      style={{ flex: '5', marginLeft: '10px', color: '#1f4b54', zIndex: '-1' }}>{props.content}</span>
    <span
      className="rightWord"
      style={{ flex: '3', marginLeft: '10px', textAlign: 'right', color: '#1f4b54', zIndex: '-1' }}>{props.value}</span>
  </div>
  );

TwoCircle.propTypes = {
  onClick: T.func.isRequired,
  content: T.string.isRequired,
  value: T.number,
};

export default TwoCircle;
