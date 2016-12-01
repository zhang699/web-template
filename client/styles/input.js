export const input = {
  backgroundColor: 'transparent',
  borderTop: 'none',
  borderLeft: 'none',
  borderRight: 'none',
  borderBottom: '1px solid #9e9e9e',
  borderRadius: '0',
  outline: 'none',
  height: '3rem',
  width: '100%',
  fontSize: '1rem',
  margin: '0 0 20px 0',
  padding: '0',
  boxShadow: 'none',
  boxSizing: 'content-box',
  transition: 'all 0.3s',
  lineHeight: '1rem',
  ':focus': {
    borderBottom: '1px solid #4caf50',
  }
}
export const inputDisabled = {
  ...input,
  borderBottom: '1px dotted #9e9e9e'
}
