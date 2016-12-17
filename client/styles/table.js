import { mainDark, blueGrey50, fullWhite, darken } from './colors';
export default {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'center',
    backgroundColor: '#FFF',
    borderRadius: '3px',
    boxSizing: 'border-box'
  },
  thead: {
    backgroundColor: fullWhite,
  },
  headrow: {
    borderBottom: `1px solid ${mainDark}`,
    height: '30px',
  },
  tr: num => {
    if(num !== undefined && (num % 2 === 0)) {
      return {
        height: '50px',
        backgroundColor: blueGrey50,
        borderTop: `1px solid ${mainDark}`,
        borderBottom: `1px solid ${mainDark}`,
        cursor: 'pointer',
        ':hover': {
          backgroundColor: darken(blueGrey50, 0.2),
          transition: 'all 150ms ease-in',
        }
      };
    }
    return {
      height: '50px',
      borderTop: `1px solid ${mainDark}`,
      borderBottom: `1px solid ${mainDark}`,
      cursor: 'pointer',
      ':hover': {
        backgroundColor: darken(blueGrey50, 0.3),
        transition: 'all 150ms ease-in',
      }
    };
  },
  th: {
    color: mainDark,
    padding: '15px 5px',
    boxSizing: 'border-box',
    minHeight: '40px',
  },
  td: {
    padding: '10px 5px',
    boxSizing: 'border-box',
    color: mainDark,
  }
};
