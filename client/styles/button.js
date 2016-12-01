export const btn = {
  position: 'relative',
  textDecoration: 'none',
  textAlign: 'center',
  letterSpacing: '0.5px',
  outline: '0',
  border: 'none',
  borderRadius: '2px',
  height: '36px',
  width: '144px',
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
  // willChange: 'opacity transform',
  transition: '0.2s ease-out',
  color: '#FFF',
  backgroundColor: '#26a69a',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12),0 3px 1px -2px rgba(0,0,0,0.2)',
  ':hover': {
    backgroundColor: '#2bbbad',
    boxShadow: '0 3px 3px 0 rgba(0,0,0,0.14),0 1px 7px 0 rgba(0,0,0,0.12),0 3px 1px -1px rgba(0,0,0,0.2)',
  }
}
export const largeBtn = {
  ...btn,
  height: '54px',
  lineHeight: '54px',
}

export const flatBtn = {
  ...btn,
  boxShadow: 'none',
  backgroundColor: 'transparent',
  color: '#343434',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: 'rgba(0,0,0,0.1)',
    boxShadow: 'none',
  }
}

export const disabled = {
  pointerEvents: 'none',
  backgroundColor: '#DFDFDF',
  boxShadow: 'none',
  color: '#9F9F9F',
  cursor: 'default'
}
