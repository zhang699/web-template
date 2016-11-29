import isEmpty from 'lodash/isEmpty';
import trim from 'lodash/trim';
import isEqual from 'lodash/isEqual';
import isNumber from 'lodash/isNumber';

// processors
export const trimProcessor = (text) => { text = trim(text); };

// validators
export const requiredValidator = (text) => (
  isEmpty(text) ? { result: false, word: 'required' } : { result: true }
);

export const passwordValidator = text => {
  const re = /^[a-zA-Z0-9]{8,12}$/g;
  return (re.test(text)) ? { result: true } : { result: false, word: 'passwdFormatErr' };
};

export const passwordConfirmValidator = checkField => text => (
  isEqual(text, checkField) ? { result: true } : { result: false, word: 'passwdConfirmErr' }
);

export const numberRangeValidator = (min, max) => input => {
  const inputNumber = parseFloat(input, 10);
  if (isNumber(inputNumber)) {
    return (inputNumber >= min && inputNumber <= max) ? { result: true } : { result: false, word: 'numberRangeErr' };
  }
  return { result: false, word: 'numberFormatErr' };
};

export const emailValidator = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return (re.test(email)) ? { result: true } : { result: false, word: 'emailFormatErr' };
};


// checkers
export const textFieldChecker = (text, processors, validators) => {
  processors.forEach(processor => processor(text));
  // functions => [{ result: BOOL, word: String},... ] => { result: BOOL, word: String}
  return validators
    .map(validator => validator(text))
    .reduce((pre, cur) => ({
      result: pre.result && cur.result,
      words: isEmpty(cur.word) ? pre.words : pre.words.concat([cur.word]),
    }), { result: true, words: [] });
};
