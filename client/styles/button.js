import * as colorsSet from './colors';

export const btn = {
  position: 'relative',
  textDecoration: 'none',
  textAlign: 'center',
  letterSpacing: '0.5px',
  outline: '0',
  border: 'none',
  borderRadius: '2px',
  height: '38px',
  width: '140px',
  fontSize: '1em',
  lineHeight: '36px',
  padding: '0 2rem',
  position: 'relative',
  display: 'inline-block',
  cursor: 'pointer',
  overflow: 'hidden',
  userSelect: 'none',
  verticalAlign: 'middle',
  zIndex: '1',
  transition: '0.2s ease-out',
  borderRadius: '20px',
  color: '#FFF',
};

export const largeBtn = {
  ...btn,
  height: '54px',
  lineHeight: '54px',
  borderRadius: '30px',
};

export const flatBtn = {
  ...btn,
  boxShadow: 'none',
  backgroundColor: 'transparent',
  color: '#343434',
  border: '1px solid',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.1)',
    boxShadow: 'none',
  }
};

export const disabled = {
  pointerEvents: 'none',
  backgroundColor: '#DFDFDF',
  boxShadow: 'none',
  color: '#9F9F9F',
  cursor: 'default'
};
export const btnDefault = {
  backgroundColor: colorsSet.grey700,
  ':hover': { backgroundColor: colorsSet.grey800 }
};
export const btnPrimary = {
  backgroundColor: colorsSet.blueGrey400,
  ':hover': {backgroundColor: colorsSet.blueGrey500}
}

export const btnInfo = {
  backgroundColor: colorsSet.cyan500,
  ':hover': {backgroundColor: colorsSet.cyan600}

}
export const btnSuccess = {
  backgroundColor: colorsSet.green300,
  ':hover': {backgroundColor: colorsSet.green400}

}
export const btnWarning = {
  backgroundColor: colorsSet.amber600,
  ':hover': {backgroundColor: colorsSet.amber700}

}
export const btnDanger = {
  backgroundColor: colorsSet.deepOrange600,
  ':hover': {backgroundColor: colorsSet.deepOrange700}
}

export const btnGhost = {
  color: colorsSet.grey800,
  backgroundColor: 'transparent',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colorsSet.grey800,
  ':hover': {
    backgroundColor: colorsSet.grey800,
    border: 'none',
    color: '#FFF'
  }
};


export const pagenationBtn = (btn, type) => ({
  ...ghostMixin(btn),
  cursor: 'pointer',
  textAlign: 'center',
  width: '38px',
  height: '38px',
  margin: '2px',
  borderRadius: '50%',
  borderWidth: '2px',
  borderColor: btn.backgroundColor,
  color: (type === 'active') ? colorsSet.fullWhite : btn.backgroundColor,
  backgroundColor: (type === 'active') ? btn.backgroundColor : colorsSet.transparent,
});

export const ghostMixin = btnOrigin => ({
  ...btnOrigin,
  color: colorsSet.grey800,
  backgroundColor: 'transparent',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: colorsSet.grey800,
  ':hover': {
    ...btnOrigin[':hover'],
    borderColor: btnOrigin.backgroundColor,
    color: colorsSet.fullWhite,
    transition: 'all 300ms cubic-bezier(0.34, 1.61, 0.7, 1)',
  }
})


export const bgAndHoverColor = (color1,color2) => {
  return (
    {backgroundColor: color1, ':hover': {backgroundColor: color2}}
  )
}
