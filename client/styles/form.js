import * as colorsSet from '../styles/colors';
export const input = {
    textAlign: 'start',
    fontSize: '1.5rem',
    fontWeight: '400',
    margin: '5px auto',
    color: colorsSet.fullBlack,
    height: '40px',
    border: `solid 1px ${colorsSet.grey400}`,
    borderRadius: '4px',
    padding: '7px 18px',
    lineHeight: '1.5rem',
    outline: 'none',
    backgroundColor: colorsSet.grey300,
    transition: 'all 0.5s linear',
    ':focus': {
    transition: 'all 0.5s linear',
    backgroundColor: colorsSet.fullWhite,
    }
}

export const errorInput = {
  backgroundColor: colorsSet.deepOrange100,
  border: `solid 1px ${colorsSet.deepOrange600}`,
}
export const successInput = {
  ':focus': {
    backgroundColor: colorsSet.fullWhite,
    border: `solid 1px ${colorsSet.green400}`,
  }
}

export const disabledInput = {
  backgroundColor: colorsSet.grey400,
  border: 'none',
  cursor: 'not-allowed',
}

export const validate = {
    height: '10px',
    fontSize: '1.5rem',
    marginTop: '5px',
    color: colorsSet.red500,
}

export const textArea = {

}
