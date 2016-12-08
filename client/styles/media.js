import * as shadows from './shadow';
import * as colors from './colors';

export const image = {
  ...shadows.shadowB,
  boxSizing: 'border-box',

};

export const circularImg = {
  ...image,
  padding: '0.3%',
  borderRadius: '50%',
}

export const rectImg = {
  ...image,
  padding: '0.5%',
  borderRadius: '1%',
}
